import { maxValueAfterReverse } from '../1330-reverse-subarray-to-maximize-array-value.js';

describe('1330-reverse-subarray-to-maximize-array-value', () => {
  it("maxValueAfterReverse([1, 2, 3, 4, 5])", () => {
    const result = maxValueAfterReverse([1, 2, 3, 4, 5]);
    expect(result).toEqual(8);
  });

  it("maxValueAfterReverse([])", () => {
    const result = maxValueAfterReverse([]);
    expect(result).toEqual(0);
  });

  it("maxValueAfterReverse([1])", () => {
    const result = maxValueAfterReverse([1]);
    expect(result).toEqual(0);
  });

  it("maxValueAfterReverse([1, 1])", () => {
    const result = maxValueAfterReverse([1, 1]);
    expect(result).toEqual(0);
  });

  it("maxValueAfterReverse([3, 1, 4, 1, 5])", () => {
    const result = maxValueAfterReverse([3, 1, 4, 1, 5]);
    expect(result).toEqual(13);
  });

  it("maxValueAfterReverse([-1, 0, 1])", () => {
    const result = maxValueAfterReverse([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
