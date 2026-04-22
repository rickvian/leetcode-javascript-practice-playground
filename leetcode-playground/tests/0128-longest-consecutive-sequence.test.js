import { longestConsecutive } from '../0128-longest-consecutive-sequence.js';

describe('0128-longest-consecutive-sequence', () => {
  it("longestConsecutive([1, 2, 3, 4, 5])", () => {
    const result = longestConsecutive([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("longestConsecutive([])", () => {
    const result = longestConsecutive([]);
    expect(result).toEqual(0);
  });

  it("longestConsecutive([1])", () => {
    const result = longestConsecutive([1]);
    expect(result).toEqual(1);
  });

  it("longestConsecutive([1, 1])", () => {
    const result = longestConsecutive([1, 1]);
    expect(result).toEqual(1);
  });

  it("longestConsecutive([3, 1, 4, 1, 5])", () => {
    const result = longestConsecutive([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("longestConsecutive([-1, 0, 1])", () => {
    const result = longestConsecutive([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
