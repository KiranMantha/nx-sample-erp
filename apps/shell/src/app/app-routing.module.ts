import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inventory'
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('inventory/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('orders/Module').then((m) => m.RemoteEntryModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
