import { largest1BorderedSquare } from '../1139-largest-1-bordered-square.js';

describe('1139-largest-1-bordered-square', () => {
  it("largest1BorderedSquare([[1, 2], [3, 4]])", () => {
    const result = largest1BorderedSquare([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("largest1BorderedSquare([[1]])", () => {
    const result = largest1BorderedSquare([[1]]);
    expect(result).toEqual(1);
  });

  it("largest1BorderedSquare([[]])", () => {
    const result = largest1BorderedSquare([[]]);
    expect(result).toEqual(0);
  });

  it("largest1BorderedSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = largest1BorderedSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(9);
  });
});
