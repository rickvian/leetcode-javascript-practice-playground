import { canMeasureWater } from '../0365-water-and-jug-problem.js';

describe('0365-water-and-jug-problem', () => {
  it("canMeasureWater(3, 5...)", () => {
    const result = canMeasureWater(3, 5, 4);
    expect(result).toEqual(true);
  });

  it("canMeasureWater(2, 6...)", () => {
    const result = canMeasureWater(2, 6, 5);
    expect(result).toEqual(false);
  });

  it("canMeasureWater(1, 2...)", () => {
    const result = canMeasureWater(1, 2, 3);
    expect(result).toEqual(true);
  });

  it("canMeasureWater(3, 5...)", () => {
    const result = canMeasureWater(3, 5, 3);
    expect(result).toEqual(true);
  });

  it("canMeasureWater(0, 0...)", () => {
    const result = canMeasureWater(0, 0, 0);
    expect(result).toEqual(true);
  });

  it("canMeasureWater(2, 4...)", () => {
    const result = canMeasureWater(2, 4, 3);
    expect(result).toEqual(false);
  });
});
