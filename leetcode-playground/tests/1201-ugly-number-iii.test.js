import { nthUglyNumber } from '../1201-ugly-number-iii.js';

describe('1201-ugly-number-iii', () => {
  it("nthUglyNumber(3, 2...)", () => {
    const result = nthUglyNumber(3, 2, 3, 5);
    expect(result).toEqual(4);
  });

  it("nthUglyNumber(4, 2...)", () => {
    const result = nthUglyNumber(4, 2, 3, 4);
    expect(result).toEqual(6);
  });

  it("nthUglyNumber(5, 2...)", () => {
    const result = nthUglyNumber(5, 2, 11, 13);
    expect(result).toEqual(10);
  });

  it("nthUglyNumber(1, 1...)", () => {
    const result = nthUglyNumber(1, 1, 2, 3);
    expect(result).toEqual(1);
  });

  it("nthUglyNumber(10, 6...)", () => {
    const result = nthUglyNumber(10, 6, 10, 15);
    expect(result).toEqual(40);
  });

  it("nthUglyNumber(100, 2...)", () => {
    const result = nthUglyNumber(100, 2, 3, 5);
    expect(result).toEqual(136);
  });
});
