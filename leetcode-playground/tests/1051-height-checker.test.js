import { heightChecker } from '../1051-height-checker.js';

describe('1051-height-checker', () => {
  it("heightChecker([1, 2, 3, 4, 5])", () => {
    const result = heightChecker([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("heightChecker([])", () => {
    const result = heightChecker([]);
    expect(result).toEqual(0);
  });

  it("heightChecker([1])", () => {
    const result = heightChecker([1]);
    expect(result).toEqual(0);
  });

  it("heightChecker([1, 1])", () => {
    const result = heightChecker([1, 1]);
    expect(result).toEqual(0);
  });

  it("heightChecker([3, 1, 4, 1, 5])", () => {
    const result = heightChecker([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("heightChecker([-1, 0, 1])", () => {
    const result = heightChecker([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
