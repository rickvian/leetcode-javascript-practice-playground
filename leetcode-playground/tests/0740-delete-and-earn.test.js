import { deleteAndEarn } from '../0740-delete-and-earn.js';

describe('0740-delete-and-earn', () => {
  it("deleteAndEarn([1, 2, 3, 4, 5])", () => {
    const result = deleteAndEarn([1, 2, 3, 4, 5]);
    expect(result).toEqual(9);
  });

  it("deleteAndEarn([])", () => {
    const result = deleteAndEarn([]);
    expect(result).toEqual(0);
  });

  it("deleteAndEarn([1])", () => {
    const result = deleteAndEarn([1]);
    expect(result).toEqual(1);
  });

  it("deleteAndEarn([1, 1])", () => {
    const result = deleteAndEarn([1, 1]);
    expect(result).toEqual(2);
  });

  it("deleteAndEarn([3, 1, 4, 1, 5])", () => {
    const result = deleteAndEarn([3, 1, 4, 1, 5]);
    expect(result).toEqual(10);
  });

  it("deleteAndEarn([-1, 0, 1])", () => {
    const result = deleteAndEarn([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
