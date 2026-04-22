import { canWinNim } from '../0292-nim-game.js';

describe('0292-nim-game', () => {
  it("canWinNim(121)", () => {
    const result = canWinNim(121);
    expect(result).toEqual(true);
  });

  it("canWinNim(-121)", () => {
    const result = canWinNim(-121);
    expect(result).toEqual(true);
  });

  it("canWinNim(10)", () => {
    const result = canWinNim(10);
    expect(result).toEqual(true);
  });

  it("canWinNim(0)", () => {
    const result = canWinNim(0);
    expect(result).toEqual(false);
  });

  it("canWinNim(-1)", () => {
    const result = canWinNim(-1);
    expect(result).toEqual(true);
  });

  it("canWinNim(1534236469)", () => {
    const result = canWinNim(1534236469);
    expect(result).toEqual(true);
  });
});
