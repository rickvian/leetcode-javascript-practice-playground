import { bestRotation } from '../0798-smallest-rotation-with-highest-score.js';

describe('0798-smallest-rotation-with-highest-score', () => {
  it("bestRotation([1, 2, 3, 4, 5])", () => {
    const result = bestRotation([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("bestRotation([])", () => {
    const result = bestRotation([]);
    expect(result).toEqual(0);
  });

  it("bestRotation([1])", () => {
    const result = bestRotation([1]);
    expect(result).toEqual(0);
  });

  it("bestRotation([1, 1])", () => {
    const result = bestRotation([1, 1]);
    expect(result).toEqual(0);
  });

  it("bestRotation([3, 1, 4, 1, 5])", () => {
    const result = bestRotation([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("bestRotation([-1, 0, 1])", () => {
    const result = bestRotation([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
