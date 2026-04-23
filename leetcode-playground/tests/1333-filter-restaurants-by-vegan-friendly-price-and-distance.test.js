import { filterRestaurants } from '../1333-filter-restaurants-by-vegan-friendly-price-and-distance.js';

describe('1333-filter-restaurants-by-vegan-friendly-price-and-distance', () => {
  it("filterRestaurants([])", () => {
    const result = filterRestaurants([]);
    expect(result).toEqual([]);
  });
});
