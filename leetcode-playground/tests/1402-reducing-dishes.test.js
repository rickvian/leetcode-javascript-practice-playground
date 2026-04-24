import { maxSatisfaction } from '../1402-reducing-dishes.js';

describe('1402-reducing-dishes', () => {
  it("maxSatisfaction([1, 2, 3, 4, 5])", () => {
    const result = maxSatisfaction([1, 2, 3, 4, 5]);
    expect(result).toEqual(55);
  });

  it("maxSatisfaction([])", () => {
    const result = maxSatisfaction([]);
    expect(result).toEqual(0);
  });

  it("maxSatisfaction([1])", () => {
    const result = maxSatisfaction([1]);
    expect(result).toEqual(1);
  });

  it("maxSatisfaction([1, 1])", () => {
    const result = maxSatisfaction([1, 1]);
    expect(result).toEqual(3);
  });

  it("maxSatisfaction([3, 1, 4, 1, 5])", () => {
    const result = maxSatisfaction([3, 1, 4, 1, 5]);
    expect(result).toEqual(53);
  });

  it("maxSatisfaction([-1, 0, 1])", () => {
    const result = maxSatisfaction([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
