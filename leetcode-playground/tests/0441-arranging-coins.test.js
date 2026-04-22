import { arrangeCoins } from '../0441-arranging-coins.js';

describe('0441-arranging-coins', () => {
  it("arrangeCoins(121)", () => {
    const result = arrangeCoins(121);
    expect(result).toEqual(15);
  });

  it("arrangeCoins(-121)", () => {
    const result = arrangeCoins(-121);
    expect(result).toEqual(-1);
  });

  it("arrangeCoins(10)", () => {
    const result = arrangeCoins(10);
    expect(result).toEqual(4);
  });

  it("arrangeCoins(0)", () => {
    const result = arrangeCoins(0);
    expect(result).toEqual(0);
  });

  it("arrangeCoins(-1)", () => {
    const result = arrangeCoins(-1);
    expect(result).toEqual(-1);
  });

  it("arrangeCoins(1534236469)", () => {
    const result = arrangeCoins(1534236469);
    expect(result).toEqual(55393);
  });
});
