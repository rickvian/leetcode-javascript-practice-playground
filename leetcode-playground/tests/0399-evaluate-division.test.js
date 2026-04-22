import { calcEquation } from '../0399-evaluate-division.js';

describe('0399-evaluate-division', () => {
  it("calcEquation([[\"a\", \"b\"], [\"b\", \"c\"]], [2, 3]...)", () => {
    const result = calcEquation([["a", "b"], ["b", "c"]], [2, 3], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
    expect(result).toEqual([6, 0.5, -1, 1, -1]);
  });

  it("calcEquation([[\"a\", \"b\"]], [0.5]...)", () => {
    const result = calcEquation([["a", "b"]], [0.5], [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]);
    expect(result).toEqual([0.5, 2, -1, -1]);
  });
});
