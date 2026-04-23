import { prisonAfterNDays } from '../0957-prison-cells-after-n-days.js';

describe('0957-prison-cells-after-n-days', () => {
  it("prisonAfterNDays([2, 7, 11, 15], 9)", () => {
    const result = prisonAfterNDays([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 0, 0, 0, 1, 1, 1, 0]);
  });

  it("prisonAfterNDays([3, 2, 4], 6)", () => {
    const result = prisonAfterNDays([3, 2, 4], 6);
    expect(result).toEqual([0, 0, 1, 1, 0, 0, 0, 0]);
  });

  it("prisonAfterNDays([3, 3], 6)", () => {
    const result = prisonAfterNDays([3, 3], 6);
    expect(result).toEqual([0, 0, 0, 1, 0, 0, 0, 0]);
  });

  it("prisonAfterNDays([-1, -2, -3, -4, -5], -8)", () => {
    const result = prisonAfterNDays([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([-1, -2, -3, -4, -5]);
  });

  it("prisonAfterNDays([1, 2], 3)", () => {
    const result = prisonAfterNDays([1, 2], 3);
    expect(result).toEqual([0, 1, 0, 0, 0, 0, 0, 0]);
  });

  it("prisonAfterNDays([0, 4, 3, 0], 0)", () => {
    const result = prisonAfterNDays([0, 4, 3, 0], 0);
    expect(result).toEqual([0, 4, 3, 0]);
  });
});
