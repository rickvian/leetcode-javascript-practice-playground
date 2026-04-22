import { nthUglyNumber } from '../0264-ugly-number-ii.js';

describe('0264-ugly-number-ii', () => {
  it("nthUglyNumber(1)", () => {
    const result = nthUglyNumber(1);
    expect(result).toEqual(1);
  });

  it("nthUglyNumber(2)", () => {
    const result = nthUglyNumber(2);
    expect(result).toEqual(2);
  });

  it("nthUglyNumber(3)", () => {
    const result = nthUglyNumber(3);
    expect(result).toEqual(3);
  });

  it("nthUglyNumber(4)", () => {
    const result = nthUglyNumber(4);
    expect(result).toEqual(4);
  });

  it("nthUglyNumber(10)", () => {
    const result = nthUglyNumber(10);
    expect(result).toEqual(12);
  });

  it("nthUglyNumber(12)", () => {
    const result = nthUglyNumber(12);
    expect(result).toEqual(16);
  });
});
