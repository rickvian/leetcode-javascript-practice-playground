import { fractionToDecimal } from '../0166-fraction-to-recurring-decimal.js';

describe('0166-fraction-to-recurring-decimal', () => {
  it("fractionToDecimal(1, 1)", () => {
    const result = fractionToDecimal(1, 1);
    expect(result).toEqual("1");
  });

  it("fractionToDecimal(0, 0)", () => {
    const result = fractionToDecimal(0, 0);
    expect(result).toEqual("0");
  });

  it("fractionToDecimal(3, 7)", () => {
    const result = fractionToDecimal(3, 7);
    expect(result).toEqual("0.(428571)");
  });

  it("fractionToDecimal(100, 1000)", () => {
    const result = fractionToDecimal(100, 1000);
    expect(result).toEqual("0.1");
  });
});
