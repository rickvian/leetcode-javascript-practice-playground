import { jump } from '../0045-jump-game-ii.js';

describe('0045-jump-game-ii', () => {
  it("jump([1, 2, 3, 4, 5])", () => {
    const result = jump([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("jump([])", () => {
    const result = jump([]);
    expect(result).toEqual(0);
  });

  it("jump([1])", () => {
    const result = jump([1]);
    expect(result).toEqual(0);
  });

  it("jump([1, 1])", () => {
    const result = jump([1, 1]);
    expect(result).toEqual(1);
  });

  it("jump([3, 1, 4, 1, 5])", () => {
    const result = jump([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("jump([-1, 0, 1])", () => {
    const result = jump([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
