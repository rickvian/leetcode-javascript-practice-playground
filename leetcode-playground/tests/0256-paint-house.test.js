import { minCost } from '../0256-paint-house.js';

describe('0256-paint-house', () => {
  it("minCost([[1]])", () => {
    const result = minCost([[1]]);
    expect(result).toEqual(1);
  });

  it("minCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(13);
  });
});
