import { movesToMakeZigzag } from '../1144-decrease-elements-to-make-array-zigzag.js';

describe('1144-decrease-elements-to-make-array-zigzag', () => {
  it("movesToMakeZigzag([1, 2, 3, 4, 5])", () => {
    const result = movesToMakeZigzag([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("movesToMakeZigzag([])", () => {
    const result = movesToMakeZigzag([]);
    expect(result).toEqual(0);
  });

  it("movesToMakeZigzag([1])", () => {
    const result = movesToMakeZigzag([1]);
    expect(result).toEqual(0);
  });

  it("movesToMakeZigzag([1, 1])", () => {
    const result = movesToMakeZigzag([1, 1]);
    expect(result).toEqual(1);
  });

  it("movesToMakeZigzag([3, 1, 4, 1, 5])", () => {
    const result = movesToMakeZigzag([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("movesToMakeZigzag([-1, 0, 1])", () => {
    const result = movesToMakeZigzag([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
