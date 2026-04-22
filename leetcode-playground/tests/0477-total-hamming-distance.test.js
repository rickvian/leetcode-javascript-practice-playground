import { totalHammingDistance } from '../0477-total-hamming-distance.js';

describe('0477-total-hamming-distance', () => {
  it("totalHammingDistance([1, 2, 3, 4, 5])", () => {
    const result = totalHammingDistance([1, 2, 3, 4, 5]);
    expect(result).toEqual(18);
  });

  it("totalHammingDistance([])", () => {
    const result = totalHammingDistance([]);
    expect(result).toEqual(0);
  });

  it("totalHammingDistance([1])", () => {
    const result = totalHammingDistance([1]);
    expect(result).toEqual(0);
  });

  it("totalHammingDistance([1, 1])", () => {
    const result = totalHammingDistance([1, 1]);
    expect(result).toEqual(0);
  });

  it("totalHammingDistance([3, 1, 4, 1, 5])", () => {
    const result = totalHammingDistance([3, 1, 4, 1, 5]);
    expect(result).toEqual(14);
  });

  it("totalHammingDistance([-1, 0, 1])", () => {
    const result = totalHammingDistance([-1, 0, 1]);
    expect(result).toEqual(64);
  });
});
