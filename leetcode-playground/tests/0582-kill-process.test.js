import { killProcess } from '../0582-kill-process.js';

describe('0582-kill-process', () => {
  it("killProcess([1, 3, 10, 5], [3, 0, 5, 3]...)", () => {
    const result = killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5);
    expect(result).toEqual([5, 10]);
  });

  it("killProcess([1, 2, 3], [0, 1, 2]...)", () => {
    const result = killProcess([1, 2, 3], [0, 1, 2], 1);
    expect(result).toEqual([1, 2, 3]);
  });

  it("killProcess([1, 2, 3], [0, 1, 2]...)", () => {
    const result = killProcess([1, 2, 3], [0, 1, 2], 2);
    expect(result).toEqual([2, 3]);
  });

  it("killProcess([1], [0]...)", () => {
    const result = killProcess([1], [0], 1);
    expect(result).toEqual([1]);
  });

  it("killProcess([1, 2, 3, 4], [0, 1, 1, 2]...)", () => {
    const result = killProcess([1, 2, 3, 4], [0, 1, 1, 2], 3);
    expect(result).toEqual([3]);
  });
});
