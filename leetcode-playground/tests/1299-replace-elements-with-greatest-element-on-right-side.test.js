import { replaceElements } from '../1299-replace-elements-with-greatest-element-on-right-side.js';

describe('1299-replace-elements-with-greatest-element-on-right-side', () => {
  it("replaceElements([1, 2, 3, 4, 5])", () => {
    const result = replaceElements([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 5, 5, 5, -1]);
  });

  it("replaceElements([])", () => {
    const result = replaceElements([]);
    expect(result).toEqual([]);
  });

  it("replaceElements([1])", () => {
    const result = replaceElements([1]);
    expect(result).toEqual([-1]);
  });

  it("replaceElements([1, 1])", () => {
    const result = replaceElements([1, 1]);
    expect(result).toEqual([1, -1]);
  });

  it("replaceElements([3, 1, 4, 1, 5])", () => {
    const result = replaceElements([3, 1, 4, 1, 5]);
    expect(result).toEqual([5, 5, 5, 5, -1]);
  });

  it("replaceElements([-1, 0, 1])", () => {
    const result = replaceElements([-1, 0, 1]);
    expect(result).toEqual([1, 1, -1]);
  });
});
