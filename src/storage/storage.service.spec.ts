import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StorageService,
        {
          provide: ConfigService,
          useValue: {
            get(key: string) {
              const map: Record<string, string> = {
                AWS_REGION: 'us-east-1',
                MINIO_ENDPOINT: 'http://localhost:9000',
                AWS_ACCESS_KEY_ID: 'minioadmin',
                AWS_SECRET_ACCESS_KEY: 'minioadmin',
                AWS_S3_BUCKET_NAME: 'local-bucket',
              };
              return map[key];
            },
          },
        },
      ],
    }).compile();

    service = module.get<StorageService>(StorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});