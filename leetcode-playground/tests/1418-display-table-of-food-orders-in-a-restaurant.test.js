import { displayTable } from '../1418-display-table-of-food-orders-in-a-restaurant.js';

describe('1418-display-table-of-food-orders-in-a-restaurant', () => {
  it("displayTable([])", () => {
    const result = displayTable([]);
    expect(result).toEqual([["Table"]]);
  });
});
