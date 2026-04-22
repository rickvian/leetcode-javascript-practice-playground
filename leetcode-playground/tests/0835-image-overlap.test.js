import { largestOverlap } from '../0835-image-overlap.js';

describe('0835-image-overlap', () => {
  it("largestOverlap([[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]])", () => {
    const result = largestOverlap([[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]]);
    expect(result).toEqual(3);
  });

  it("largestOverlap([[1]], [[1]])", () => {
    const result = largestOverlap([[1]], [[1]]);
    expect(result).toEqual(1);
  });

  it("largestOverlap([[0]], [[0]])", () => {
    const result = largestOverlap([[0]], [[0]]);
    expect(result).toEqual(0);
  });

  it("largestOverlap([[0, 1], [1, 0]], [[1, 0], [0, 1]])", () => {
    const result = largestOverlap([[0, 1], [1, 0]], [[1, 0], [0, 1]]);
    expect(result).toEqual(1);
  });

  it("largestOverlap([[1, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 1]])", () => {
    const result = largestOverlap([[1, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 1]]);
    expect(result).toEqual(1);
  });

  it("largestOverlap([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]])", () => {
    const result = largestOverlap([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    expect(result).toEqual(0);
  });
});
