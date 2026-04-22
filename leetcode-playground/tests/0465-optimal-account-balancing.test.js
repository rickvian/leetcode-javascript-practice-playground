import { minTransfers } from '../0465-optimal-account-balancing.js';

describe('0465-optimal-account-balancing', () => {
  it("minTransfers([[]])", () => {
    const result = minTransfers([[]]);
    expect(result).toEqual(0);
  });

  it("minTransfers([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minTransfers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
