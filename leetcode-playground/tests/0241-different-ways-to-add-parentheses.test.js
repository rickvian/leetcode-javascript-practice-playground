import { diffWaysToCompute } from '../0241-different-ways-to-add-parentheses.js';

describe('0241-different-ways-to-add-parentheses', () => {
  it("diffWaysToCompute(\"2-1-1\")", () => {
    const result = diffWaysToCompute("2-1-1");
    expect(result).toEqual([2, 0]);
  });

  it("diffWaysToCompute(\"2*3-4*5\")", () => {
    const result = diffWaysToCompute("2*3-4*5");
    expect(result).toEqual([-34, -10, -14, -10, 10]);
  });

  it("diffWaysToCompute(\"1\")", () => {
    const result = diffWaysToCompute("1");
    expect(result).toEqual([1]);
  });

  it("diffWaysToCompute(\"1+2\")", () => {
    const result = diffWaysToCompute("1+2");
    expect(result).toEqual([3]);
  });

  it("diffWaysToCompute(\"1*2*3\")", () => {
    const result = diffWaysToCompute("1*2*3");
    expect(result).toEqual([6, 6]);
  });
});
