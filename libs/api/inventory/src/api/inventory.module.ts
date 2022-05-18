import { Module } from '@nestjs/common';
import { Api/inventoryService } from './api/inventory.service';

@Module({
  providers: [Api/inventoryService],
  exports: [Api/inventoryService],
})
export class Api/inventoryModule {}
