import { minCostToMoveChips } from '../1217-minimum-cost-to-move-chips-to-the-same-position.js';

describe('1217-minimum-cost-to-move-chips-to-the-same-position', () => {
  it("minCostToMoveChips([1, 2, 3, 4, 5])", () => {
    const result = minCostToMoveChips([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("minCostToMoveChips([])", () => {
    const result = minCostToMoveChips([]);
    expect(result).toEqual(0);
  });

  it("minCostToMoveChips([1])", () => {
    const result = minCostToMoveChips([1]);
    expect(result).toEqual(0);
  });

  it("minCostToMoveChips([1, 1])", () => {
    const result = minCostToMoveChips([1, 1]);
    expect(result).toEqual(0);
  });

  it("minCostToMoveChips([3, 1, 4, 1, 5])", () => {
    const result = minCostToMoveChips([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("minCostToMoveChips([-1, 0, 1])", () => {
    const result = minCostToMoveChips([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
