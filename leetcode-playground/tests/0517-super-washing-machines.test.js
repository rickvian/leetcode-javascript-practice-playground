import { findMinMoves } from '../0517-super-washing-machines.js';

describe('0517-super-washing-machines', () => {
  it("findMinMoves([1, 2, 3, 4, 5])", () => {
    const result = findMinMoves([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("findMinMoves([])", () => {
    const result = findMinMoves([]);
    expect(result).toEqual(-1);
  });

  it("findMinMoves([1])", () => {
    const result = findMinMoves([1]);
    expect(result).toEqual(0);
  });

  it("findMinMoves([1, 1])", () => {
    const result = findMinMoves([1, 1]);
    expect(result).toEqual(0);
  });

  it("findMinMoves([3, 1, 4, 1, 5])", () => {
    const result = findMinMoves([3, 1, 4, 1, 5]);
    expect(result).toEqual(-1);
  });

  it("findMinMoves([-1, 0, 1])", () => {
    const result = findMinMoves([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
