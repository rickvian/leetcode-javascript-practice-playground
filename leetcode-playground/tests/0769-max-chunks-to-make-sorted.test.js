import { maxChunksToSorted } from '../0769-max-chunks-to-make-sorted.js';

describe('0769-max-chunks-to-make-sorted', () => {
  it("maxChunksToSorted([1, 2, 3, 4, 5])", () => {
    const result = maxChunksToSorted([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("maxChunksToSorted([])", () => {
    const result = maxChunksToSorted([]);
    expect(result).toEqual(0);
  });

  it("maxChunksToSorted([1])", () => {
    const result = maxChunksToSorted([1]);
    expect(result).toEqual(0);
  });

  it("maxChunksToSorted([1, 1])", () => {
    const result = maxChunksToSorted([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxChunksToSorted([3, 1, 4, 1, 5])", () => {
    const result = maxChunksToSorted([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("maxChunksToSorted([-1, 0, 1])", () => {
    const result = maxChunksToSorted([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
