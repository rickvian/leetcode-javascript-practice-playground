import { dominantIndex } from '../0747-largest-number-at-least-twice-of-others.js';

describe('0747-largest-number-at-least-twice-of-others', () => {
  it("dominantIndex([1, 2, 3, 4, 5])", () => {
    const result = dominantIndex([1, 2, 3, 4, 5]);
    expect(result).toEqual(-1);
  });

  it("dominantIndex([])", () => {
    const result = dominantIndex([]);
    expect(result).toEqual(-1);
  });

  it("dominantIndex([1])", () => {
    const result = dominantIndex([1]);
    expect(result).toEqual(0);
  });

  it("dominantIndex([1, 1])", () => {
    const result = dominantIndex([1, 1]);
    expect(result).toEqual(0);
  });

  it("dominantIndex([3, 1, 4, 1, 5])", () => {
    const result = dominantIndex([3, 1, 4, 1, 5]);
    expect(result).toEqual(-1);
  });

  it("dominantIndex([-1, 0, 1])", () => {
    const result = dominantIndex([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
