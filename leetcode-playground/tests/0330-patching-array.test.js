import { minPatches } from '../0330-patching-array.js';

describe('0330-patching-array', () => {
  it("minPatches([2, 7, 11, 15], 9)", () => {
    const result = minPatches([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("minPatches([3, 2, 4], 6)", () => {
    const result = minPatches([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("minPatches([3, 3], 6)", () => {
    const result = minPatches([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("minPatches([-1, -2, -3, -4, -5], -8)", () => {
    const result = minPatches([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("minPatches([1, 2], 3)", () => {
    const result = minPatches([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("minPatches([0, 4, 3, 0], 0)", () => {
    const result = minPatches([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
