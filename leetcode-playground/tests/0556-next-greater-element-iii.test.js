import { nextGreaterElement } from '../0556-next-greater-element-iii.js';

describe('0556-next-greater-element-iii', () => {
  it("nextGreaterElement([4, 1, 2], [1, 3, 4, 2])", () => {
    const result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
    expect(result).toEqual(-1);
  });

  it("nextGreaterElement([2, 4], [1, 2, 3, 4])", () => {
    const result = nextGreaterElement([2, 4], [1, 2, 3, 4]);
    expect(result).toEqual(-1);
  });

  it("nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])", () => {
    const result = nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]);
    expect(result).toEqual(-1);
  });

  it("nextGreaterElement([1], [1, 3, 5])", () => {
    const result = nextGreaterElement([1], [1, 3, 5]);
    expect(result).toEqual(-1);
  });

  it("nextGreaterElement([1], [1])", () => {
    const result = nextGreaterElement([1], [1]);
    expect(result).toEqual(-1);
  });

  it("nextGreaterElement([], [1, 2, 3])", () => {
    const result = nextGreaterElement([], [1, 2, 3]);
    expect(result).toEqual(-1);
  });
});
