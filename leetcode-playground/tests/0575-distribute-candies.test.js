import { distributeCandies } from '../0575-distribute-candies.js';

describe('0575-distribute-candies', () => {
  it("distributeCandies([1, 2, 3, 4, 5])", () => {
    const result = distributeCandies([1, 2, 3, 4, 5]);
    expect(result).toEqual(2.5);
  });

  it("distributeCandies([])", () => {
    const result = distributeCandies([]);
    expect(result).toEqual(0);
  });

  it("distributeCandies([1])", () => {
    const result = distributeCandies([1]);
    expect(result).toEqual(0.5);
  });

  it("distributeCandies([1, 1])", () => {
    const result = distributeCandies([1, 1]);
    expect(result).toEqual(1);
  });

  it("distributeCandies([3, 1, 4, 1, 5])", () => {
    const result = distributeCandies([3, 1, 4, 1, 5]);
    expect(result).toEqual(2.5);
  });

  it("distributeCandies([-1, 0, 1])", () => {
    const result = distributeCandies([-1, 0, 1]);
    expect(result).toEqual(1.5);
  });
});
