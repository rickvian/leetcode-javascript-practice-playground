import { lastRemaining } from '../0390-elimination-game.js';

describe('0390-elimination-game', () => {
  it("lastRemaining(121)", () => {
    const result = lastRemaining(121);
    expect(result).toEqual(62);
  });

  it("lastRemaining(-121)", () => {
    const result = lastRemaining(-121);
    expect(result).toEqual(1);
  });

  it("lastRemaining(10)", () => {
    const result = lastRemaining(10);
    expect(result).toEqual(8);
  });

  it("lastRemaining(0)", () => {
    const result = lastRemaining(0);
    expect(result).toEqual(1);
  });

  it("lastRemaining(-1)", () => {
    const result = lastRemaining(-1);
    expect(result).toEqual(1);
  });

  it("lastRemaining(1534236469)", () => {
    const result = lastRemaining(1534236469);
    expect(result).toEqual(527947638);
  });
});
