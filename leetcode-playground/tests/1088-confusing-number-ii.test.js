import { confusingNumberII } from '../1088-confusing-number-ii.js';

describe('1088-confusing-number-ii', () => {
  it("confusingNumberII(121)", () => {
    const result = confusingNumberII(121);
    expect(result).toEqual(26);
  });

  it("confusingNumberII(-121)", () => {
    const result = confusingNumberII(-121);
    expect(result).toEqual(0);
  });

  it("confusingNumberII(10)", () => {
    const result = confusingNumberII(10);
    expect(result).toEqual(3);
  });

  it("confusingNumberII(0)", () => {
    const result = confusingNumberII(0);
    expect(result).toEqual(0);
  });

  it("confusingNumberII(-1)", () => {
    const result = confusingNumberII(-1);
    expect(result).toEqual(0);
  });

  it("confusingNumberII(1534236469)", () => {
    const result = confusingNumberII(1534236469);
    expect(result).toEqual(2731626);
  });
});
