import { maxSizeSlices } from '../1388-pizza-with-3n-slices.js';

describe('1388-pizza-with-3n-slices', () => {
  it("maxSizeSlices([1, 2, 3, 4, 5])", () => {
    const result = maxSizeSlices([1, 2, 3, 4, 5]);
    expect(result).toEqual(8);
  });

  it("maxSizeSlices([1])", () => {
    const result = maxSizeSlices([1]);
    expect(result).toEqual(1);
  });

  it("maxSizeSlices([1, 1])", () => {
    const result = maxSizeSlices([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxSizeSlices([3, 1, 4, 1, 5])", () => {
    const result = maxSizeSlices([3, 1, 4, 1, 5]);
    expect(result).toEqual(9);
  });

  it("maxSizeSlices([-1, 0, 1])", () => {
    const result = maxSizeSlices([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
