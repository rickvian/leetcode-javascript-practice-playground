import { kEmptySlots } from '../0683-k-empty-slots.js';

describe('0683-k-empty-slots', () => {
  it("kEmptySlots([2, 7, 11, 15], 9)", () => {
    const result = kEmptySlots([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("kEmptySlots([3, 2, 4], 6)", () => {
    const result = kEmptySlots([3, 2, 4], 6);
    expect(result).toEqual(-1);
  });

  it("kEmptySlots([3, 3], 6)", () => {
    const result = kEmptySlots([3, 3], 6);
    expect(result).toEqual(-1);
  });

  it("kEmptySlots([1, 2], 3)", () => {
    const result = kEmptySlots([1, 2], 3);
    expect(result).toEqual(-1);
  });
});
