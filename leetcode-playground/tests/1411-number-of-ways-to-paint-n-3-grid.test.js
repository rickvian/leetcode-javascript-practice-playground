import { numOfWays } from '../1411-number-of-ways-to-paint-n-3-grid.js';

describe('1411-number-of-ways-to-paint-n-3-grid', () => {
  it("numOfWays(121)", () => {
    const result = numOfWays(121);
    expect(result).toEqual(725290369);
  });

  it("numOfWays(-121)", () => {
    const result = numOfWays(-121);
    expect(result).toEqual(12);
  });

  it("numOfWays(10)", () => {
    const result = numOfWays(10);
    expect(result).toEqual(10107954);
  });

  it("numOfWays(0)", () => {
    const result = numOfWays(0);
    expect(result).toEqual(12);
  });

  it("numOfWays(-1)", () => {
    const result = numOfWays(-1);
    expect(result).toEqual(12);
  });

  it("numOfWays(1534236469)", () => {
    const result = numOfWays(1534236469);
    expect(result).toEqual(31295147);
  });
});
