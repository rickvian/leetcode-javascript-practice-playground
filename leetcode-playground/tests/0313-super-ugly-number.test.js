import { nthSuperUglyNumber } from '../0313-super-ugly-number.js';

describe('0313-super-ugly-number', () => {
  it("nthSuperUglyNumber(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = nthSuperUglyNumber(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(0);
  });

  it("nthSuperUglyNumber(2, [2, 1])", () => {
    const result = nthSuperUglyNumber(2, [2, 1]);
    expect(result).toEqual(1);
  });

  it("nthSuperUglyNumber(1, [1, 2, 3])", () => {
    const result = nthSuperUglyNumber(1, [1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("nthSuperUglyNumber(3, [1, 2, 3, 4, 5])", () => {
    const result = nthSuperUglyNumber(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("nthSuperUglyNumber(1, [7, 6, 4, 3, 1])", () => {
    const result = nthSuperUglyNumber(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(1);
  });
});
