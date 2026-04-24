import { countElements } from '../1426-counting-elements.js';

describe('1426-counting-elements', () => {
  it("countElements([1, 2, 3, 4, 5])", () => {
    const result = countElements([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("countElements([])", () => {
    const result = countElements([]);
    expect(result).toEqual(0);
  });

  it("countElements([1])", () => {
    const result = countElements([1]);
    expect(result).toEqual(0);
  });

  it("countElements([1, 1])", () => {
    const result = countElements([1, 1]);
    expect(result).toEqual(0);
  });

  it("countElements([3, 1, 4, 1, 5])", () => {
    const result = countElements([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("countElements([-1, 0, 1])", () => {
    const result = countElements([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
