import { reachNumber } from '../0754-reach-a-number.js';

describe('0754-reach-a-number', () => {
  it("reachNumber(121)", () => {
    const result = reachNumber(121);
    expect(result).toEqual(17);
  });

  it("reachNumber(-121)", () => {
    const result = reachNumber(-121);
    expect(result).toEqual(17);
  });

  it("reachNumber(10)", () => {
    const result = reachNumber(10);
    expect(result).toEqual(4);
  });

  it("reachNumber(0)", () => {
    const result = reachNumber(0);
    expect(result).toEqual(0);
  });

  it("reachNumber(-1)", () => {
    const result = reachNumber(-1);
    expect(result).toEqual(1);
  });

  it("reachNumber(1534236469)", () => {
    const result = reachNumber(1534236469);
    expect(result).toEqual(55394);
  });
});
