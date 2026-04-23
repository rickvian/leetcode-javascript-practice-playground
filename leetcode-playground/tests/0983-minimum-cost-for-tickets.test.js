import { mincostTickets } from '../0983-minimum-cost-for-tickets.js';

describe('0983-minimum-cost-for-tickets', () => {
  it("mincostTickets([1, 2, 3], [4, 5, 6])", () => {
    const result = mincostTickets([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(5);
  });
});
