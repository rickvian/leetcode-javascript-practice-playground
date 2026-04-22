import { minCostClimbingStairs } from '../0746-min-cost-climbing-stairs.js';

describe('0746-min-cost-climbing-stairs', () => {
  it("minCostClimbingStairs([1, 2, 3, 4, 5])", () => {
    const result = minCostClimbingStairs([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("minCostClimbingStairs([1, 1])", () => {
    const result = minCostClimbingStairs([1, 1]);
    expect(result).toEqual(1);
  });

  it("minCostClimbingStairs([3, 1, 4, 1, 5])", () => {
    const result = minCostClimbingStairs([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("minCostClimbingStairs([-1, 0, 1])", () => {
    const result = minCostClimbingStairs([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
