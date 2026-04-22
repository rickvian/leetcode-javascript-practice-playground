import { minTotalDistance } from '../0296-best-meeting-point.js';

describe('0296-best-meeting-point', () => {
  it("minTotalDistance([[1, 2], [3, 4]])", () => {
    const result = minTotalDistance([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("minTotalDistance([[1]])", () => {
    const result = minTotalDistance([[1]]);
    expect(result).toEqual(0);
  });

  it("minTotalDistance([[]])", () => {
    const result = minTotalDistance([[]]);
    expect(result).toEqual(0);
  });

  it("minTotalDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minTotalDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
