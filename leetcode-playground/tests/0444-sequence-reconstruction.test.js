import { sequenceReconstruction } from '../0444-sequence-reconstruction.js';

describe('0444-sequence-reconstruction', () => {
  it("sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3], [2, 3]])", () => {
    const result = sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3], [2, 3]]);
    expect(result).toEqual(true);
  });

  it("sequenceReconstruction([4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]])", () => {
    const result = sequenceReconstruction([4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]]);
    expect(result).toEqual(true);
  });

  it("sequenceReconstruction([1], [[1], [1]])", () => {
    const result = sequenceReconstruction([1], [[1], [1]]);
    expect(result).toEqual(true);
  });

  it("sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]])", () => {
    const result = sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]]);
    expect(result).toEqual(false);
  });

  it("sequenceReconstruction([1, 2], [[1, 2]])", () => {
    const result = sequenceReconstruction([1, 2], [[1, 2]]);
    expect(result).toEqual(true);
  });

  it("sequenceReconstruction([1, 2, 3, 4, 5], [[1, 2], [2, 3], [3, 4], [4, 5]])", () => {
    const result = sequenceReconstruction([1, 2, 3, 4, 5], [[1, 2], [2, 3], [3, 4], [4, 5]]);
    expect(result).toEqual(true);
  });
});
