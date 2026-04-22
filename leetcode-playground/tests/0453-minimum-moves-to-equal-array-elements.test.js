import { minMoves } from '../0453-minimum-moves-to-equal-array-elements.js';

describe('0453-minimum-moves-to-equal-array-elements', () => {
  it("minMoves([1, 2, 3, 4, 5])", () => {
    const result = minMoves([1, 2, 3, 4, 5]);
    expect(result).toEqual(10);
  });

  it("minMoves([])", () => {
    const result = minMoves([]);
    expect(result).toEqual(0);
  });

  it("minMoves([1])", () => {
    const result = minMoves([1]);
    expect(result).toEqual(0);
  });

  it("minMoves([1, 1])", () => {
    const result = minMoves([1, 1]);
    expect(result).toEqual(0);
  });

  it("minMoves([3, 1, 4, 1, 5])", () => {
    const result = minMoves([3, 1, 4, 1, 5]);
    expect(result).toEqual(9);
  });

  it("minMoves([-1, 0, 1])", () => {
    const result = minMoves([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
