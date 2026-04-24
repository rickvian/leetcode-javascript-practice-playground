import { minCost } from '../1368-minimum-cost-to-make-at-least-one-valid-path-in-a-grid.js';

describe('1368-minimum-cost-to-make-at-least-one-valid-path-in-a-grid', () => {
  it("minCost([[1, 2], [3, 4]])", () => {
    const result = minCost([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("minCost([[1]])", () => {
    const result = minCost([[1]]);
    expect(result).toEqual(0);
  });

  it("minCost([[]])", () => {
    const result = minCost([[]]);
    expect(result).toEqual(0);
  });

  it("minCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(2);
  });
});
