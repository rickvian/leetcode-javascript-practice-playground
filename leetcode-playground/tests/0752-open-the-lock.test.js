import { openLock } from '../0752-open-the-lock.js';

describe('0752-open-the-lock', () => {
  it("openLock([1, 2, 3])", () => {
    const result = openLock([1, 2, 3]);
    expect(result).toEqual(-1);
  });

  it("openLock([])", () => {
    const result = openLock([]);
    expect(result).toEqual(-1);
  });

  it("openLock([0])", () => {
    const result = openLock([0]);
    expect(result).toEqual(-1);
  });

  it("openLock([-1, 0, 1])", () => {
    const result = openLock([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
