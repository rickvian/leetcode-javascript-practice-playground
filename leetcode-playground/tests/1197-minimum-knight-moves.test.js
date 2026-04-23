import { minKnightMoves } from '../1197-minimum-knight-moves.js';

describe('1197-minimum-knight-moves', () => {
  it("minKnightMoves(1, 1)", () => {
    const result = minKnightMoves(1, 1);
    expect(result).toEqual(2);
  });

  it("minKnightMoves(0, 0)", () => {
    const result = minKnightMoves(0, 0);
    expect(result).toEqual(0);
  });

  it("minKnightMoves(3, 7)", () => {
    const result = minKnightMoves(3, 7);
    expect(result).toEqual(4);
  });

  it("minKnightMoves(100, 1000)", () => {
    const result = minKnightMoves(100, 1000);
    expect(result).toEqual(500);
  });
});
