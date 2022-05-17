import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const entryComponents = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: entryComponents,
  exports: entryComponents
})
export class UiModule {}
