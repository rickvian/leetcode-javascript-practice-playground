import { countDigitOne } from '../0233-number-of-digit-one.js';

describe('0233-number-of-digit-one', () => {
  it("countDigitOne(121)", () => {
    const result = countDigitOne(121);
    expect(result).toEqual(55);
  });

  it("countDigitOne(-121)", () => {
    const result = countDigitOne(-121);
    expect(result).toEqual(0);
  });

  it("countDigitOne(10)", () => {
    const result = countDigitOne(10);
    expect(result).toEqual(2);
  });

  it("countDigitOne(0)", () => {
    const result = countDigitOne(0);
    expect(result).toEqual(0);
  });

  it("countDigitOne(-1)", () => {
    const result = countDigitOne(-1);
    expect(result).toEqual(0);
  });

  it("countDigitOne(1534236469)", () => {
    const result = countDigitOne(1534236469);
    expect(result).toEqual(1968861467);
  });
});
