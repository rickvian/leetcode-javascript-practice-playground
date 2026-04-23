import { pathInZigZagTree } from '../1104-path-in-zigzag-labelled-binary-tree.js';

describe('1104-path-in-zigzag-labelled-binary-tree', () => {
  it("pathInZigZagTree(121)", () => {
    const result = pathInZigZagTree(121);
    expect(result).toEqual([1, 2, 7, 8, 30, 35, 121]);
  });

  it("pathInZigZagTree(-121)", () => {
    const result = pathInZigZagTree(-121);
    expect(result).toEqual([]);
  });

  it("pathInZigZagTree(10)", () => {
    const result = pathInZigZagTree(10);
    expect(result).toEqual([1, 2, 6, 10]);
  });

  it("pathInZigZagTree(0)", () => {
    const result = pathInZigZagTree(0);
    expect(result).toEqual([]);
  });

  it("pathInZigZagTree(-1)", () => {
    const result = pathInZigZagTree(-1);
    expect(result).toEqual([]);
  });

  it("pathInZigZagTree(1534236469)", () => {
    const result = pathInZigZagTree(1534236469);
    expect(result).toEqual([1, 3, 5, 12, 22, 50, 91, 201, 365, 804, 1463, 3217, 5852, 12870, 23410, 51482, 93642, 205931, 374569, 823725, 1498277, 3294900, 5993111, 13179601, 23972444, 52718406, 95889779, 210873625, 383559117, 843494501, 1534236469]);
  });
});
