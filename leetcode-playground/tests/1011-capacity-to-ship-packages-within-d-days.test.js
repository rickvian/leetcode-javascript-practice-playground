import { shipWithinDays } from '../1011-capacity-to-ship-packages-within-d-days.js';

describe('1011-capacity-to-ship-packages-within-d-days', () => {
  it("shipWithinDays([2, 7, 11, 15], 9)", () => {
    const result = shipWithinDays([2, 7, 11, 15], 9);
    expect(result).toEqual(15);
  });

  it("shipWithinDays([3, 2, 4], 6)", () => {
    const result = shipWithinDays([3, 2, 4], 6);
    expect(result).toEqual(4);
  });

  it("shipWithinDays([3, 3], 6)", () => {
    const result = shipWithinDays([3, 3], 6);
    expect(result).toEqual(3);
  });

  it("shipWithinDays([-1, -2, -3, -4, -5], -8)", () => {
    const result = shipWithinDays([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("shipWithinDays([1, 2], 3)", () => {
    const result = shipWithinDays([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("shipWithinDays([0, 4, 3, 0], 0)", () => {
    const result = shipWithinDays([0, 4, 3, 0], 0);
    expect(result).toEqual(7);
  });
});
