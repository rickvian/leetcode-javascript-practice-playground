import { kWeakestRows } from '../1337-the-k-weakest-rows-in-a-matrix.js';

describe('1337-the-k-weakest-rows-in-a-matrix', () => {
  it("kWeakestRows([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = kWeakestRows([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual([0, 1]);
  });

  it("kWeakestRows([[1, 2], [3, 4]], 5)", () => {
    const result = kWeakestRows([[1, 2], [3, 4]], 5);
    expect(result).toEqual([0, 1]);
  });

  it("kWeakestRows([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = kWeakestRows([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual([0, 1, 2]);
  });
});
