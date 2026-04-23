import { lastStoneWeightII } from '../1049-last-stone-weight-ii.js';

describe('1049-last-stone-weight-ii', () => {
  it("lastStoneWeightII([1, 2, 3, 4, 5])", () => {
    const result = lastStoneWeightII([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("lastStoneWeightII([])", () => {
    const result = lastStoneWeightII([]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeightII([1])", () => {
    const result = lastStoneWeightII([1]);
    expect(result).toEqual(1);
  });

  it("lastStoneWeightII([1, 1])", () => {
    const result = lastStoneWeightII([1, 1]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeightII([3, 1, 4, 1, 5])", () => {
    const result = lastStoneWeightII([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeightII([-1, 0, 1])", () => {
    const result = lastStoneWeightII([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
