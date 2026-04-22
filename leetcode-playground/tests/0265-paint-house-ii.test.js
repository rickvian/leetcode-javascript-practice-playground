import { minCostII } from '../0265-paint-house-ii.js';

describe('0265-paint-house-ii', () => {
  it("minCostII([[1, 2], [3, 4]])", () => {
    const result = minCostII([[1, 2], [3, 4]]);
    expect(result).toEqual(5);
  });

  it("minCostII([[1]])", () => {
    const result = minCostII([[1]]);
    expect(result).toEqual(1);
  });

  it("minCostII([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minCostII([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(13);
  });
});
