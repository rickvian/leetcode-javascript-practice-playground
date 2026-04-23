import { confusingNumber } from '../1056-confusing-number.js';

describe('1056-confusing-number', () => {
  it("confusingNumber(121)", () => {
    const result = confusingNumber(121);
    expect(result).toEqual(false);
  });

  it("confusingNumber(-121)", () => {
    const result = confusingNumber(-121);
    expect(result).toEqual(false);
  });

  it("confusingNumber(10)", () => {
    const result = confusingNumber(10);
    expect(result).toEqual(true);
  });

  it("confusingNumber(0)", () => {
    const result = confusingNumber(0);
    expect(result).toEqual(false);
  });

  it("confusingNumber(-1)", () => {
    const result = confusingNumber(-1);
    expect(result).toEqual(false);
  });

  it("confusingNumber(1534236469)", () => {
    const result = confusingNumber(1534236469);
    expect(result).toEqual(false);
  });
});
