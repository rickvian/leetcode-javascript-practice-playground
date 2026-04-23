import { missingElement } from '../1060-missing-element-in-sorted-array.js';

describe('1060-missing-element-in-sorted-array', () => {
  it("missingElement([2, 7, 11, 15], 9)", () => {
    const result = missingElement([2, 7, 11, 15], 9);
    expect(result).toEqual(13);
  });

  it("missingElement([3, 2, 4], 6)", () => {
    const result = missingElement([3, 2, 4], 6);
    expect(result).toEqual(11);
  });

  it("missingElement([3, 3], 6)", () => {
    const result = missingElement([3, 3], 6);
    expect(result).toEqual(10);
  });

  it("missingElement([1, 2], 3)", () => {
    const result = missingElement([1, 2], 3);
    expect(result).toEqual(5);
  });

  it("missingElement([0, 4, 3, 0], 0)", () => {
    const result = missingElement([0, 4, 3, 0], 0);
    expect(result).toEqual(3);
  });
});
