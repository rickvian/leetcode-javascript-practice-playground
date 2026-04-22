import { constructArray } from '../0667-beautiful-arrangement-ii.js';

describe('0667-beautiful-arrangement-ii', () => {
  it("constructArray(1)", () => {
    const result = constructArray(1);
    expect(result).toEqual([1]);
  });

  it("constructArray(2)", () => {
    const result = constructArray(2);
    expect(result).toEqual([1, 2]);
  });

  it("constructArray(3)", () => {
    const result = constructArray(3);
    expect(result).toEqual([1, 2, 3]);
  });

  it("constructArray(4)", () => {
    const result = constructArray(4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("constructArray(5)", () => {
    const result = constructArray(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("constructArray(10)", () => {
    const result = constructArray(10);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
