import { pathSum } from '../0666-path-sum-iv.js';

describe('0666-path-sum-iv', () => {
  it("pathSum([1, 2, 3, 4, 5])", () => {
    const result = pathSum([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("pathSum([])", () => {
    const result = pathSum([]);
    expect(result).toEqual(0);
  });

  it("pathSum([1])", () => {
    const result = pathSum([1]);
    expect(result).toEqual(0);
  });

  it("pathSum([1, 1])", () => {
    const result = pathSum([1, 1]);
    expect(result).toEqual(0);
  });

  it("pathSum([3, 1, 4, 1, 5])", () => {
    const result = pathSum([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("pathSum([-1, 0, 1])", () => {
    const result = pathSum([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
