import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    logHeapUsage: true,
    globals: true,
    environment: 'node',
    include: ['**/tests/**/*.test.js'],
    testTimeout: 400_000,
  },
});
