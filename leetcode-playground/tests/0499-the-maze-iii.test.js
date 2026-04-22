import { findShortestWay } from '../0499-the-maze-iii.js';

describe('0499-the-maze-iii', () => {
  it("findShortestWay([[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], [4, 3]...)", () => {
    const result = findShortestWay([[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], [4, 3], [0, 1]);
    expect(result).toEqual("lul");
  });

  it("findShortestWay([[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], [4, 3]...)", () => {
    const result = findShortestWay([[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], [4, 3], [3, 0]);
    expect(result).toEqual("impossible");
  });

  it("findShortestWay([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0]...)", () => {
    const result = findShortestWay([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0], [2, 2]);
    expect(result).toEqual("dr");
  });

  it("findShortestWay([[0, 0], [0, 0]], [0, 0]...)", () => {
    const result = findShortestWay([[0, 0], [0, 0]], [0, 0], [1, 1]);
    expect(result).toEqual("dr");
  });
});
