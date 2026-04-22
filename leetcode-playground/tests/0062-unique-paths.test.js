import { uniquePaths } from '../0062-unique-paths.js';

describe('0062-unique-paths', () => {
  it("uniquePaths(1, 1)", () => {
    const result = uniquePaths(1, 1);
    expect(result).toEqual(1);
  });

  it("uniquePaths(3, 7)", () => {
    const result = uniquePaths(3, 7);
    expect(result).toEqual(28);
  });

  it("uniquePaths(100, 1000)", () => {
    const result = uniquePaths(100, 1000);
    expect(result).toEqual(1.1770759977021705e+143);
  });
});
