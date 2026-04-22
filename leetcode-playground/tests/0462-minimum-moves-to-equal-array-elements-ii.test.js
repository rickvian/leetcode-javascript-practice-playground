import { minMoves2 } from '../0462-minimum-moves-to-equal-array-elements-ii.js';

describe('0462-minimum-moves-to-equal-array-elements-ii', () => {
  it("minMoves2([1, 2, 3, 4, 5])", () => {
    const result = minMoves2([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("minMoves2([])", () => {
    const result = minMoves2([]);
    expect(result).toEqual(0);
  });

  it("minMoves2([1])", () => {
    const result = minMoves2([1]);
    expect(result).toEqual(0);
  });

  it("minMoves2([1, 1])", () => {
    const result = minMoves2([1, 1]);
    expect(result).toEqual(0);
  });

  it("minMoves2([3, 1, 4, 1, 5])", () => {
    const result = minMoves2([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("minMoves2([-1, 0, 1])", () => {
    const result = minMoves2([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
