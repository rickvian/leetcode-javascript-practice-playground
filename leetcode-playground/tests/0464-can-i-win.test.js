import { canIWin } from '../0464-can-i-win.js';

describe('0464-can-i-win', () => {
  it("canIWin(10, 11)", () => {
    const result = canIWin(10, 11);
    expect(result).toEqual(false);
  });

  it("canIWin(10, 0)", () => {
    const result = canIWin(10, 0);
    expect(result).toEqual(true);
  });

  it("canIWin(2, 3)", () => {
    const result = canIWin(2, 3);
    expect(result).toEqual(false);
  });

  it("canIWin(5, 10)", () => {
    const result = canIWin(5, 10);
    expect(result).toEqual(true);
  });

  it("canIWin(1, 1)", () => {
    const result = canIWin(1, 1);
    expect(result).toEqual(true);
  });

  it("canIWin(3, 5)", () => {
    const result = canIWin(3, 5);
    expect(result).toEqual(true);
  });
});
