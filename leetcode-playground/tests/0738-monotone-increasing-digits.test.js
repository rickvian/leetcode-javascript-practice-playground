import { monotoneIncreasingDigits } from '../0738-monotone-increasing-digits.js';

describe('0738-monotone-increasing-digits', () => {
  it("monotoneIncreasingDigits(121)", () => {
    const result = monotoneIncreasingDigits(121);
    expect(result).toEqual(119);
  });

  it("monotoneIncreasingDigits(10)", () => {
    const result = monotoneIncreasingDigits(10);
    expect(result).toEqual(9);
  });

  it("monotoneIncreasingDigits(0)", () => {
    const result = monotoneIncreasingDigits(0);
    expect(result).toEqual(0);
  });

  it("monotoneIncreasingDigits(1534236469)", () => {
    const result = monotoneIncreasingDigits(1534236469);
    expect(result).toEqual(1499999999);
  });
});
