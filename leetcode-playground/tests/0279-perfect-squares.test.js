import { numSquares } from '../0279-perfect-squares.js';

describe('0279-perfect-squares', () => {
  it("numSquares(1)", () => {
    const result = numSquares(1);
    expect(result).toEqual(1);
  });

  it("numSquares(2)", () => {
    const result = numSquares(2);
    expect(result).toEqual(2);
  });

  it("numSquares(3)", () => {
    const result = numSquares(3);
    expect(result).toEqual(3);
  });

  it("numSquares(4)", () => {
    const result = numSquares(4);
    expect(result).toEqual(1);
  });

  it("numSquares(10)", () => {
    const result = numSquares(10);
    expect(result).toEqual(2);
  });

  it("numSquares(12)", () => {
    const result = numSquares(12);
    expect(result).toEqual(3);
  });
});
