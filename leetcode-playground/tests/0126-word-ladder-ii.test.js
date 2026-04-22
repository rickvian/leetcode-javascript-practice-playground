import { findLadders } from '../0126-word-ladder-ii.js';

describe('0126-word-ladder-ii', () => {
  it("findLadders([1, 2, 3])", () => {
    const result = findLadders([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("findLadders([])", () => {
    const result = findLadders([]);
    expect(result).toEqual([]);
  });

  it("findLadders([0])", () => {
    const result = findLadders([0]);
    expect(result).toEqual([]);
  });

  it("findLadders([-1, 0, 1])", () => {
    const result = findLadders([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
