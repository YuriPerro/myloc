import { cleanup, init } from 'detox';
import adapter from 'detox/runners/jest/adapter';

import { detox } from '../package.json';

const config = detox;

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
