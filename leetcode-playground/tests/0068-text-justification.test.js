import { fullJustify } from '../0068-text-justification.js';

describe('0068-text-justification', () => {
  it("fullJustify([1, 2, 3])", () => {
    const result = fullJustify([1, 2, 3]);
    expect(result).toEqual(["1 2 3"]);
  });

  it("fullJustify([])", () => {
    const result = fullJustify([]);
    expect(result).toEqual([""]);
  });

  it("fullJustify([0])", () => {
    const result = fullJustify([0]);
    expect(result).toEqual(["0"]);
  });

  it("fullJustify([-1, 0, 1])", () => {
    const result = fullJustify([-1, 0, 1]);
    expect(result).toEqual(["-1 0 1"]);
  });
});
