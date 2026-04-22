import { topKFrequent } from '../0692-top-k-frequent-words.js';

describe('0692-top-k-frequent-words', () => {
  it("topKFrequent([])", () => {
    const result = topKFrequent([]);
    expect(result).toEqual([]);
  });

  it("topKFrequent([0])", () => {
    const result = topKFrequent([0]);
    expect(result).toEqual([0]);
  });
});
