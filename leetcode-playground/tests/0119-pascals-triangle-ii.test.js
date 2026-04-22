import { getRow } from '../0119-pascals-triangle-ii.js';

describe('0119-pascals-triangle-ii', () => {
  it("getRow(1)", () => {
    const result = getRow(1);
    expect(result).toEqual([1, 1]);
  });

  it("getRow(2)", () => {
    const result = getRow(2);
    expect(result).toEqual([1, 2, 1]);
  });

  it("getRow(3)", () => {
    const result = getRow(3);
    expect(result).toEqual([1, 3, 3, 1]);
  });

  it("getRow(4)", () => {
    const result = getRow(4);
    expect(result).toEqual([1, 4, 6, 4, 1]);
  });

  it("getRow(5)", () => {
    const result = getRow(5);
    expect(result).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it("getRow(0)", () => {
    const result = getRow(0);
    expect(result).toEqual([1]);
  });
});
