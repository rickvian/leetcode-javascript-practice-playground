import { maxCount } from '../0598-range-addition-ii.js';

describe('0598-range-addition-ii', () => {
  it("maxCount(3, 3...)", () => {
    const result = maxCount(3, 3, [[2, 2], [3, 3]]);
    expect(result).toEqual(4);
  });

  it("maxCount(3, 3...)", () => {
    const result = maxCount(3, 3, []);
    expect(result).toEqual(9);
  });

  it("maxCount(2, 2...)", () => {
    const result = maxCount(2, 2, [[1, 1], [2, 2], [1, 2]]);
    expect(result).toEqual(1);
  });

  it("maxCount(1, 1...)", () => {
    const result = maxCount(1, 1, [[1, 1]]);
    expect(result).toEqual(1);
  });

  it("maxCount(5, 4...)", () => {
    const result = maxCount(5, 4, [[2, 3], [3, 2], [4, 1]]);
    expect(result).toEqual(2);
  });
});
