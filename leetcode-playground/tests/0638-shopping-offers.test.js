import { shoppingOffers } from '../0638-shopping-offers.js';

describe('0638-shopping-offers', () => {
  it("shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]]...)", () => {
    const result = shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]);
    expect(result).toEqual(14);
  });

  it("shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]]...)", () => {
    const result = shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]);
    expect(result).toEqual(11);
  });

  it("shoppingOffers([2, 5], []...)", () => {
    const result = shoppingOffers([2, 5], [], [3, 2]);
    expect(result).toEqual(16);
  });

  it("shoppingOffers([1, 1], [[1, 1, 1]]...)", () => {
    const result = shoppingOffers([1, 1], [[1, 1, 1]], [2, 2]);
    expect(result).toEqual(2);
  });

  it("shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]]...)", () => {
    const result = shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [0, 0]);
    expect(result).toEqual(0);
  });
});
