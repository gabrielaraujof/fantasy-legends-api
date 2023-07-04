import { Test, TestingModule } from '@nestjs/testing';
import { vi, describe, beforeEach, it, expect } from 'vitest';

import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

describe('AppResolver', () => {
  let resolver: AppResolver;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppResolver,
        { provide: AppService, useValue: { getHello: vi.fn(() => 'hello') } },
      ],
    }).compile();

    resolver = module.get<AppResolver>(AppResolver);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should say hello', () => {
    const result = resolver.sayHello();
    expect(result).toBe('hello');
    expect(service.getHello).toBeCalledTimes(1);
  });
});
