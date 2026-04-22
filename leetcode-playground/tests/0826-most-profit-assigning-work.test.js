import { maxProfitAssignment } from '../0826-most-profit-assigning-work.js';

describe('0826-most-profit-assigning-work', () => {
  it("maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50]...)", () => {
    const result = maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]);
    expect(result).toEqual(100);
  });

  it("maxProfitAssignment([85, 47, 57], [24, 66, 99]...)", () => {
    const result = maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]);
    expect(result).toEqual(0);
  });

  it("maxProfitAssignment([1], [1]...)", () => {
    const result = maxProfitAssignment([1], [1], [1]);
    expect(result).toEqual(1);
  });

  it("maxProfitAssignment([], []...)", () => {
    const result = maxProfitAssignment([], [], []);
    expect(result).toEqual(0);
  });

  it("maxProfitAssignment([5, 5, 5], [0, 0, 0]...)", () => {
    const result = maxProfitAssignment([5, 5, 5], [0, 0, 0], [3, 5, 10]);
    expect(result).toEqual(0);
  });

  it("maxProfitAssignment([10, 20, 30], [100, 200, 300]...)", () => {
    const result = maxProfitAssignment([10, 20, 30], [100, 200, 300], [5, 15, 25]);
    expect(result).toEqual(300);
  });
});
