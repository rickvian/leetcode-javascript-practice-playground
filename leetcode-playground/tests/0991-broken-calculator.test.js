import { brokenCalc } from '../0991-broken-calculator.js';

describe('0991-broken-calculator', () => {
  it("brokenCalc(1, 1)", () => {
    const result = brokenCalc(1, 1);
    expect(result).toEqual(0);
  });

  it("brokenCalc(0, 0)", () => {
    const result = brokenCalc(0, 0);
    expect(result).toEqual(0);
  });

  it("brokenCalc(3, 7)", () => {
    const result = brokenCalc(3, 7);
    expect(result).toEqual(4);
  });

  it("brokenCalc(100, 1000)", () => {
    const result = brokenCalc(100, 1000);
    expect(result).toEqual(42);
  });
});
