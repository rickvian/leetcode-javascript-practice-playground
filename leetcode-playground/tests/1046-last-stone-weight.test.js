import { lastStoneWeight } from '../1046-last-stone-weight.js';

describe('1046-last-stone-weight', () => {
  it("lastStoneWeight([1, 2, 3, 4, 5])", () => {
    const result = lastStoneWeight([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("lastStoneWeight([])", () => {
    const result = lastStoneWeight([]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeight([1])", () => {
    const result = lastStoneWeight([1]);
    expect(result).toEqual(1);
  });

  it("lastStoneWeight([1, 1])", () => {
    const result = lastStoneWeight([1, 1]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeight([3, 1, 4, 1, 5])", () => {
    const result = lastStoneWeight([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("lastStoneWeight([-1, 0, 1])", () => {
    const result = lastStoneWeight([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
