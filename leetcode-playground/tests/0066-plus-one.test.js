import { plusOne } from '../0066-plus-one.js';

describe('0066-plus-one', () => {
  it("plusOne([1, 2, 3, 4, 5])", () => {
    const result = plusOne([1, 2, 3, 4, 5]);
    expect(result).toEqual(["1", "2", "3", "4", "6"]);
  });

  it("plusOne([])", () => {
    const result = plusOne([]);
    expect(result).toEqual(["1"]);
  });

  it("plusOne([1])", () => {
    const result = plusOne([1]);
    expect(result).toEqual(["2"]);
  });

  it("plusOne([1, 1])", () => {
    const result = plusOne([1, 1]);
    expect(result).toEqual(["1", "2"]);
  });

  it("plusOne([3, 1, 4, 1, 5])", () => {
    const result = plusOne([3, 1, 4, 1, 5]);
    expect(result).toEqual(["3", "1", "4", "1", "6"]);
  });

  it("plusOne([-1, 0, 1])", () => {
    const result = plusOne([-1, 0, 1]);
    expect(result).toEqual(["-", "1", "0", "0"]);
  });
});
