import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { describe, beforeEach, it, expect } from 'vitest';
import request from 'supertest-graphql';
import gql from 'graphql-tag';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST) sayHello', async () => {
    const { data } = await request<{ sayHello: string }>(app.getHttpServer())
      .query(
        gql`
          query {
            sayHello
          }
        `,
      )
      .expectNoErrors();

    expect(data?.sayHello).toBe('Hello World!');
  });
});
