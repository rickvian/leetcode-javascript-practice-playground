import { maximizeSweetness } from '../1231-divide-chocolate.js';

describe('1231-divide-chocolate', () => {
  it("maximizeSweetness([2, 7, 11, 15], 9)", () => {
    const result = maximizeSweetness([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("maximizeSweetness([3, 2, 4], 6)", () => {
    const result = maximizeSweetness([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("maximizeSweetness([3, 3], 6)", () => {
    const result = maximizeSweetness([3, 3], 6);
    expect(result).toEqual(3);
  });

  it("maximizeSweetness([-1, -2, -3, -4, -5], -8)", () => {
    const result = maximizeSweetness([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-5);
  });

  it("maximizeSweetness([1, 2], 3)", () => {
    const result = maximizeSweetness([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("maximizeSweetness([0, 4, 3, 0], 0)", () => {
    const result = maximizeSweetness([0, 4, 3, 0], 0);
    expect(result).toEqual(7);
  });
});
