import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import { StorageService } from '../storage/storage.service';

describe('UploadController', () => {
  let controller: UploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [
        {
          provide: StorageService,
          useValue: { uploadFile: jest.fn().mockResolvedValue('http://127.0.0.1:9000/local-bucket/test.csv') },
        },
      ],
    }).compile();

    controller = module.get<UploadController>(UploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});