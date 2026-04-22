import { checkPossibility } from '../0665-non-decreasing-array.js';

describe('0665-non-decreasing-array', () => {
  it("checkPossibility([1, 2, 3, 4, 5])", () => {
    const result = checkPossibility([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("checkPossibility([])", () => {
    const result = checkPossibility([]);
    expect(result).toEqual(true);
  });

  it("checkPossibility([1])", () => {
    const result = checkPossibility([1]);
    expect(result).toEqual(true);
  });

  it("checkPossibility([1, 1])", () => {
    const result = checkPossibility([1, 1]);
    expect(result).toEqual(true);
  });

  it("checkPossibility([3, 1, 4, 1, 5])", () => {
    const result = checkPossibility([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("checkPossibility([-1, 0, 1])", () => {
    const result = checkPossibility([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
