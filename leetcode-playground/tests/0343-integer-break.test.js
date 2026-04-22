import { integerBreak } from '../0343-integer-break.js';

describe('0343-integer-break', () => {
  it("integerBreak(121)", () => {
    const result = integerBreak(121);
    expect(result).toEqual(16210220612075905000);
  });

  it("integerBreak(-121)", () => {
    const result = integerBreak(-121);
    expect(result).toEqual(-122);
  });

  it("integerBreak(10)", () => {
    const result = integerBreak(10);
    expect(result).toEqual(36);
  });

  it("integerBreak(0)", () => {
    const result = integerBreak(0);
    expect(result).toEqual(-1);
  });

  it("integerBreak(-1)", () => {
    const result = integerBreak(-1);
    expect(result).toEqual(-2);
  });
});
