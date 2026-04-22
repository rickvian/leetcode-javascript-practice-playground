import { topKFrequent } from '../0347-top-k-frequent-elements.js';

describe('0347-top-k-frequent-elements', () => {
  it("topKFrequent([2, 7, 11, 15], 9)", () => {
    const result = topKFrequent([2, 7, 11, 15], 9);
    expect(result).toEqual([2, 7, 11, 15]);
  });

  it("topKFrequent([3, 2, 4], 6)", () => {
    const result = topKFrequent([3, 2, 4], 6);
    expect(result).toEqual([3, 2, 4]);
  });

  it("topKFrequent([3, 3], 6)", () => {
    const result = topKFrequent([3, 3], 6);
    expect(result).toEqual([3]);
  });

  it("topKFrequent([-1, -2, -3, -4, -5], -8)", () => {
    const result = topKFrequent([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([]);
  });

  it("topKFrequent([1, 2], 3)", () => {
    const result = topKFrequent([1, 2], 3);
    expect(result).toEqual([1, 2]);
  });

  it("topKFrequent([0, 4, 3, 0], 0)", () => {
    const result = topKFrequent([0, 4, 3, 0], 0);
    expect(result).toEqual([]);
  });
});
