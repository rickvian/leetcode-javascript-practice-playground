import { knightProbability } from '../0688-knight-probability-in-chessboard.js';

describe('0688-knight-probability-in-chessboard', () => {
  it("knightProbability(3, 2...)", () => {
    const result = knightProbability(3, 2, 0, 0);
    expect(result).toEqual(0.0625);
  });

  it("knightProbability(3, 0...)", () => {
    const result = knightProbability(3, 0, 0, 0);
    expect(result).toEqual(1);
  });

  it("knightProbability(8, 1...)", () => {
    const result = knightProbability(8, 1, 0, 0);
    expect(result).toEqual(0.25);
  });

  it("knightProbability(5, 3...)", () => {
    const result = knightProbability(5, 3, 2, 2);
    expect(result).toEqual(0.25);
  });

  it("knightProbability(3, 1...)", () => {
    const result = knightProbability(3, 1, 0, 0);
    expect(result).toEqual(0.25);
  });

  it("knightProbability(1, 0...)", () => {
    const result = knightProbability(1, 0, 0, 0);
    expect(result).toEqual(1);
  });
});
