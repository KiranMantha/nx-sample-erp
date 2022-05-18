import { Test, TestingModule } from '@nestjs/testing';
import { Api/inventoryService } from './api/inventory.service';

describe('Api/inventoryService', () => {
  let service: Api/inventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Api/inventoryService],
    }).compile();

    service = module.get<Api/inventoryService>(Api/inventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
