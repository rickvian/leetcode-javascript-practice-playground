import { wallsAndGates } from '../0286-walls-and-gates.js';

describe('0286-walls-and-gates', () => {
  it("wallsAndGates([[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]])", () => {
    const _nums0 = [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]];
    wallsAndGates(_nums0);
    expect(_nums0).toEqual([[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]);
  });

  it("wallsAndGates([[0, -1], [2147483647, 2147483647]])", () => {
    const _nums1 = [[0, -1], [2147483647, 2147483647]];
    wallsAndGates(_nums1);
    expect(_nums1).toEqual([[0, -1], [1, 2]]);
  });

  it("wallsAndGates([[2147483647]])", () => {
    const _nums2 = [[2147483647]];
    wallsAndGates(_nums2);
    expect(_nums2).toEqual([[2147483647]]);
  });

  it("wallsAndGates([[0]])", () => {
    const _nums3 = [[0]];
    wallsAndGates(_nums3);
    expect(_nums3).toEqual([[0]]);
  });
});
