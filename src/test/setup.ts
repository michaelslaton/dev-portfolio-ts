import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {});
afterAll(() => {});
afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});