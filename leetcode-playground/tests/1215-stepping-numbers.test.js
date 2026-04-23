import { countSteppingNumbers } from '../1215-stepping-numbers.js';

describe('1215-stepping-numbers', () => {
  it("countSteppingNumbers(1, 1)", () => {
    const result = countSteppingNumbers(1, 1);
    expect(result).toEqual([1]);
  });

  it("countSteppingNumbers(0, 0)", () => {
    const result = countSteppingNumbers(0, 0);
    expect(result).toEqual([0]);
  });

  it("countSteppingNumbers(3, 7)", () => {
    const result = countSteppingNumbers(3, 7);
    expect(result).toEqual([3, 4, 5, 6, 7]);
  });

  it("countSteppingNumbers(100, 1000)", () => {
    const result = countSteppingNumbers(100, 1000);
    expect(result).toEqual([101, 121, 123, 210, 212, 232, 234, 321, 323, 343, 345, 432, 434, 454, 456, 543, 545, 565, 567, 654, 656, 676, 678, 765, 767, 787, 789, 876, 878, 898, 987, 989]);
  });
});
