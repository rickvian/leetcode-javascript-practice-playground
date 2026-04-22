import { nextGreaterElements } from '../0503-next-greater-element-ii.js';

describe('0503-next-greater-element-ii', () => {
  it("nextGreaterElements([4, 1, 2], [1, 3, 4, 2])", () => {
    const result = nextGreaterElements([4, 1, 2], [1, 3, 4, 2]);
    expect(result).toEqual([-1, 2, 4]);
  });

  it("nextGreaterElements([2, 4], [1, 2, 3, 4])", () => {
    const result = nextGreaterElements([2, 4], [1, 2, 3, 4]);
    expect(result).toEqual([4, -1]);
  });

  it("nextGreaterElements([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])", () => {
    const result = nextGreaterElements([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]);
    expect(result).toEqual([3, 5, -1, 4, 5]);
  });

  it("nextGreaterElements([1], [1, 3, 5])", () => {
    const result = nextGreaterElements([1], [1, 3, 5]);
    expect(result).toEqual([-1]);
  });

  it("nextGreaterElements([1], [1])", () => {
    const result = nextGreaterElements([1], [1]);
    expect(result).toEqual([-1]);
  });

  it("nextGreaterElements([], [1, 2, 3])", () => {
    const result = nextGreaterElements([], [1, 2, 3]);
    expect(result).toEqual([]);
  });
});
