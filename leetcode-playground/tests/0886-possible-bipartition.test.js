import { possibleBipartition } from '../0886-possible-bipartition.js';

describe('0886-possible-bipartition', () => {
  it("possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])", () => {
    const result = possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]);
    expect(result).toEqual(true);
  });

  it("possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])", () => {
    const result = possibleBipartition(3, [[1, 2], [1, 3], [2, 3]]);
    expect(result).toEqual(false);
  });

  it("possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])", () => {
    const result = possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]);
    expect(result).toEqual(false);
  });

  it("possibleBipartition(1, [])", () => {
    const result = possibleBipartition(1, []);
    expect(result).toEqual(true);
  });

  it("possibleBipartition(2, [[1, 2]])", () => {
    const result = possibleBipartition(2, [[1, 2]]);
    expect(result).toEqual(true);
  });

  it("possibleBipartition(4, [[1, 2], [3, 4]])", () => {
    const result = possibleBipartition(4, [[1, 2], [3, 4]]);
    expect(result).toEqual(true);
  });
});
