export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  transform: {},
  setupFilesAfterEnv: ['./jest.perf-setup.js'],
};
