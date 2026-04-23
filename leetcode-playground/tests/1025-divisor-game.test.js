import { divisorGame } from '../1025-divisor-game.js';

describe('1025-divisor-game', () => {
  it("divisorGame(121)", () => {
    const result = divisorGame(121);
    expect(result).toEqual(false);
  });

  it("divisorGame(-121)", () => {
    const result = divisorGame(-121);
    expect(result).toEqual(false);
  });

  it("divisorGame(10)", () => {
    const result = divisorGame(10);
    expect(result).toEqual(true);
  });

  it("divisorGame(0)", () => {
    const result = divisorGame(0);
    expect(result).toEqual(true);
  });

  it("divisorGame(-1)", () => {
    const result = divisorGame(-1);
    expect(result).toEqual(false);
  });

  it("divisorGame(1534236469)", () => {
    const result = divisorGame(1534236469);
    expect(result).toEqual(false);
  });
});
