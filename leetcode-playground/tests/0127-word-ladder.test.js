import { ladderLength } from '../0127-word-ladder.js';

describe('0127-word-ladder', () => {
  it("ladderLength([1, 2, 3])", () => {
    const result = ladderLength([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("ladderLength([])", () => {
    const result = ladderLength([]);
    expect(result).toEqual(0);
  });

  it("ladderLength([0])", () => {
    const result = ladderLength([0]);
    expect(result).toEqual(0);
  });

  it("ladderLength([-1, 0, 1])", () => {
    const result = ladderLength([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
