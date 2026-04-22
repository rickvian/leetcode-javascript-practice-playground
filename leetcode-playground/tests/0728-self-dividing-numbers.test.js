import { selfDividingNumbers } from '../0728-self-dividing-numbers.js';

describe('0728-self-dividing-numbers', () => {
  it("selfDividingNumbers(1, 1)", () => {
    const result = selfDividingNumbers(1, 1);
    expect(result).toEqual([1]);
  });

  it("selfDividingNumbers(0, 0)", () => {
    const result = selfDividingNumbers(0, 0);
    expect(result).toEqual([]);
  });

  it("selfDividingNumbers(3, 7)", () => {
    const result = selfDividingNumbers(3, 7);
    expect(result).toEqual([3, 4, 5, 6, 7]);
  });

  it("selfDividingNumbers(100, 1000)", () => {
    const result = selfDividingNumbers(100, 1000);
    expect(result).toEqual([111, 112, 115, 122, 124, 126, 128, 132, 135, 144, 155, 162, 168, 175, 184, 212, 216, 222, 224, 244, 248, 264, 288, 312, 315, 324, 333, 336, 366, 384, 396, 412, 424, 432, 444, 448, 488, 515, 555, 612, 624, 636, 648, 666, 672, 728, 735, 777, 784, 816, 824, 848, 864, 888, 936, 999]);
  });
});
