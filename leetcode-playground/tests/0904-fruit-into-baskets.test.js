import { totalFruit } from '../0904-fruit-into-baskets.js';

describe('0904-fruit-into-baskets', () => {
  it("totalFruit([1, 2, 3, 4, 5])", () => {
    const result = totalFruit([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("totalFruit([])", () => {
    const result = totalFruit([]);
    expect(result).toEqual(0);
  });

  it("totalFruit([1])", () => {
    const result = totalFruit([1]);
    expect(result).toEqual(1);
  });

  it("totalFruit([1, 1])", () => {
    const result = totalFruit([1, 1]);
    expect(result).toEqual(2);
  });

  it("totalFruit([3, 1, 4, 1, 5])", () => {
    const result = totalFruit([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("totalFruit([-1, 0, 1])", () => {
    const result = totalFruit([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
