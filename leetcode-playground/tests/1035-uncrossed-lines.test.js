import { maxUncrossedLines } from '../1035-uncrossed-lines.js';

describe('1035-uncrossed-lines', () => {
  it("maxUncrossedLines([1, 2, 3], [4, 5, 6])", () => {
    const result = maxUncrossedLines([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(0);
  });

  it("maxUncrossedLines([1], [1])", () => {
    const result = maxUncrossedLines([1], [1]);
    expect(result).toEqual(1);
  });

  it("maxUncrossedLines([1, 3], [2])", () => {
    const result = maxUncrossedLines([1, 3], [2]);
    expect(result).toEqual(0);
  });

  it("maxUncrossedLines([1, 2], [3, 4])", () => {
    const result = maxUncrossedLines([1, 2], [3, 4]);
    expect(result).toEqual(0);
  });
});
