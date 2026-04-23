import { beautifulArray } from '../0932-beautiful-array.js';

describe('0932-beautiful-array', () => {
  it("beautifulArray(1)", () => {
    const result = beautifulArray(1);
    expect(result).toEqual([1]);
  });

  it("beautifulArray(2)", () => {
    const result = beautifulArray(2);
    expect(result).toEqual([1, 2]);
  });

  it("beautifulArray(3)", () => {
    const result = beautifulArray(3);
    expect(result).toEqual([1, 3, 2]);
  });

  it("beautifulArray(4)", () => {
    const result = beautifulArray(4);
    expect(result).toEqual([1, 3, 2, 4]);
  });

  it("beautifulArray(5)", () => {
    const result = beautifulArray(5);
    expect(result).toEqual([1, 5, 3, 2, 4]);
  });

  it("beautifulArray(6)", () => {
    const result = beautifulArray(6);
    expect(result).toEqual([1, 5, 3, 2, 6, 4]);
  });
});
