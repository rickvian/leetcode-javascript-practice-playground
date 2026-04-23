import { minCostToSupplyWater } from '../1168-optimize-water-distribution-in-a-village.js';

describe('1168-optimize-water-distribution-in-a-village', () => {
  it("minCostToSupplyWater(1, [2]...)", () => {
    const result = minCostToSupplyWater(1, [2], []);
    expect(result).toEqual(2);
  });

  it("minCostToSupplyWater(2, [1, 1]...)", () => {
    const result = minCostToSupplyWater(2, [1, 1], [[1, 2, 1]]);
    expect(result).toEqual(2);
  });

  it("minCostToSupplyWater(3, [1, 2, 2]...)", () => {
    const result = minCostToSupplyWater(3, [1, 2, 2], [[1, 2, 1], [2, 3, 1]]);
    expect(result).toEqual(3);
  });

  it("minCostToSupplyWater(3, [1, 2, 2]...)", () => {
    const result = minCostToSupplyWater(3, [1, 2, 2], [[1, 2, 1], [2, 3, 1], [1, 3, 2]]);
    expect(result).toEqual(3);
  });

  it("minCostToSupplyWater(2, [10, 10]...)", () => {
    const result = minCostToSupplyWater(2, [10, 10], []);
    expect(result).toEqual(20);
  });

  it("minCostToSupplyWater(1, [1]...)", () => {
    const result = minCostToSupplyWater(1, [1], []);
    expect(result).toEqual(1);
  });
});
