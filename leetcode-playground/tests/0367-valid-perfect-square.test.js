import { isPerfectSquare } from '../0367-valid-perfect-square.js';

describe('0367-valid-perfect-square', () => {
  it("isPerfectSquare(121)", () => {
    const result = isPerfectSquare(121);
    expect(result).toEqual(true);
  });

  it("isPerfectSquare(-121)", () => {
    const result = isPerfectSquare(-121);
    expect(result).toEqual(false);
  });

  it("isPerfectSquare(10)", () => {
    const result = isPerfectSquare(10);
    expect(result).toEqual(false);
  });

  it("isPerfectSquare(0)", () => {
    const result = isPerfectSquare(0);
    expect(result).toEqual(false);
  });

  it("isPerfectSquare(-1)", () => {
    const result = isPerfectSquare(-1);
    expect(result).toEqual(false);
  });

  it("isPerfectSquare(1534236469)", () => {
    const result = isPerfectSquare(1534236469);
    expect(result).toEqual(false);
  });
});
