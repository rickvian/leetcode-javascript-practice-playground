import { gameOfLife } from '../0289-game-of-life.js';

describe('0289-game-of-life', () => {
  it("gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])", () => {
    const _nums0 = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
    gameOfLife(_nums0);
    expect(_nums0).toEqual([[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]);
  });

  it("gameOfLife([[1, 1], [1, 0]])", () => {
    const _nums1 = [[1, 1], [1, 0]];
    gameOfLife(_nums1);
    expect(_nums1).toEqual([[1, 1], [1, 1]]);
  });

  it("gameOfLife([[0]])", () => {
    const _nums2 = [[0]];
    gameOfLife(_nums2);
    expect(_nums2).toEqual([[0]]);
  });

  it("gameOfLife([[1]])", () => {
    const _nums3 = [[1]];
    gameOfLife(_nums3);
    expect(_nums3).toEqual([[0]]);
  });
});
