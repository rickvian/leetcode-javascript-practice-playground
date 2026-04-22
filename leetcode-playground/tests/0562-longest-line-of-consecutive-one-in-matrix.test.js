import { longestLine } from '../0562-longest-line-of-consecutive-one-in-matrix.js';

describe('0562-longest-line-of-consecutive-one-in-matrix', () => {
  it("longestLine([[1, 2], [3, 4]])", () => {
    const result = longestLine([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("longestLine([[1]])", () => {
    const result = longestLine([[1]]);
    expect(result).toEqual(1);
  });

  it("longestLine([[]])", () => {
    const result = longestLine([[]]);
    expect(result).toEqual(0);
  });

  it("longestLine([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = longestLine([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
