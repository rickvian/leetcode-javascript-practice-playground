import { makesquare } from '../0473-matchsticks-to-square.js';

describe('0473-matchsticks-to-square', () => {
  it("makesquare([1, 2, 3, 4, 5])", () => {
    const result = makesquare([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("makesquare([])", () => {
    const result = makesquare([]);
    expect(result).toEqual(false);
  });

  it("makesquare([1])", () => {
    const result = makesquare([1]);
    expect(result).toEqual(false);
  });

  it("makesquare([1, 1])", () => {
    const result = makesquare([1, 1]);
    expect(result).toEqual(false);
  });

  it("makesquare([3, 1, 4, 1, 5])", () => {
    const result = makesquare([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("makesquare([-1, 0, 1])", () => {
    const result = makesquare([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
