import { checkPerfectNumber } from '../0507-perfect-number.js';

describe('0507-perfect-number', () => {
  it("checkPerfectNumber(121)", () => {
    const result = checkPerfectNumber(121);
    expect(result).toEqual(false);
  });

  it("checkPerfectNumber(-121)", () => {
    const result = checkPerfectNumber(-121);
    expect(result).toEqual(false);
  });

  it("checkPerfectNumber(10)", () => {
    const result = checkPerfectNumber(10);
    expect(result).toEqual(false);
  });

  it("checkPerfectNumber(0)", () => {
    const result = checkPerfectNumber(0);
    expect(result).toEqual(true);
  });

  it("checkPerfectNumber(-1)", () => {
    const result = checkPerfectNumber(-1);
    expect(result).toEqual(false);
  });

  it("checkPerfectNumber(1534236469)", () => {
    const result = checkPerfectNumber(1534236469);
    expect(result).toEqual(false);
  });
});
