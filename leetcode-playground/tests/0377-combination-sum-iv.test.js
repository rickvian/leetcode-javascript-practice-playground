import { combinationSum4 } from '../0377-combination-sum-iv.js';

describe('0377-combination-sum-iv', () => {
  it("combinationSum4([2, 7, 11, 15], 9)", () => {
    const result = combinationSum4([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("combinationSum4([3, 2, 4], 6)", () => {
    const result = combinationSum4([3, 2, 4], 6);
    expect(result).toEqual(4);
  });

  it("combinationSum4([3, 3], 6)", () => {
    const result = combinationSum4([3, 3], 6);
    expect(result).toEqual(4);
  });

  it("combinationSum4([1, 2], 3)", () => {
    const result = combinationSum4([1, 2], 3);
    expect(result).toEqual(3);
  });

  it("combinationSum4([0, 4, 3, 0], 0)", () => {
    const result = combinationSum4([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
