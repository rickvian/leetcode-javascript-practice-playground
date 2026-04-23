import { maxEqualRowsAfterFlips } from '../1072-flip-columns-for-maximum-number-of-equal-rows.js';

describe('1072-flip-columns-for-maximum-number-of-equal-rows', () => {
  it("maxEqualRowsAfterFlips([[1, 2], [3, 4]])", () => {
    const result = maxEqualRowsAfterFlips([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("maxEqualRowsAfterFlips([[1]])", () => {
    const result = maxEqualRowsAfterFlips([[1]]);
    expect(result).toEqual(1);
  });

  it("maxEqualRowsAfterFlips([[]])", () => {
    const result = maxEqualRowsAfterFlips([[]]);
    expect(result).toEqual(2);
  });

  it("maxEqualRowsAfterFlips([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxEqualRowsAfterFlips([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
