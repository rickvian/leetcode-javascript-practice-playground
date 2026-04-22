import { hIndex } from '../0274-h-index.js';

describe('0274-h-index', () => {
  it("hIndex([1, 2, 3, 4, 5])", () => {
    const result = hIndex([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("hIndex([])", () => {
    const result = hIndex([]);
    expect(result).toEqual(0);
  });

  it("hIndex([1])", () => {
    const result = hIndex([1]);
    expect(result).toEqual(1);
  });

  it("hIndex([1, 1])", () => {
    const result = hIndex([1, 1]);
    expect(result).toEqual(1);
  });

  it("hIndex([3, 1, 4, 1, 5])", () => {
    const result = hIndex([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("hIndex([-1, 0, 1])", () => {
    const result = hIndex([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
