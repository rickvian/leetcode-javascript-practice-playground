import { numRescueBoats } from '../0881-boats-to-save-people.js';

describe('0881-boats-to-save-people', () => {
  it("numRescueBoats([2, 7, 11, 15], 9)", () => {
    const result = numRescueBoats([2, 7, 11, 15], 9);
    expect(result).toEqual(3);
  });

  it("numRescueBoats([3, 2, 4], 6)", () => {
    const result = numRescueBoats([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("numRescueBoats([3, 3], 6)", () => {
    const result = numRescueBoats([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("numRescueBoats([-1, -2, -3, -4, -5], -8)", () => {
    const result = numRescueBoats([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(4);
  });

  it("numRescueBoats([1, 2], 3)", () => {
    const result = numRescueBoats([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("numRescueBoats([0, 4, 3, 0], 0)", () => {
    const result = numRescueBoats([0, 4, 3, 0], 0);
    expect(result).toEqual(3);
  });
});
