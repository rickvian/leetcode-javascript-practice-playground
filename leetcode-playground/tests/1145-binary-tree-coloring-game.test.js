import { btreeGameWinningMove } from '../1145-binary-tree-coloring-game.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1145-binary-tree-coloring-game', () => {
  it("btreeGameWinningMove([3, 9, 20, null, null, 15, 7], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([3, 9, 20, null, null, 15, 7]), 2, 2);
    expect(result).toEqual(false);
  });

  it("btreeGameWinningMove([1], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([1]), 2, 2);
    expect(result).toEqual(false);
  });

  it("btreeGameWinningMove([], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([]), 2, 2);
    expect(result).toEqual(false);
  });

  it("btreeGameWinningMove([1, 2, 3, 4, 5], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([1, 2, 3, 4, 5]), 2, 2);
    expect(result).toEqual(false);
  });

  it("btreeGameWinningMove([1, null, 2, 3], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([1, null, 2, 3]), 2, 2);
    expect(result).toEqual(false);
  });

  it("btreeGameWinningMove([1, 2], 2...)", () => {
    const result = btreeGameWinningMove(arrayToTree([1, 2]), 2, 2);
    expect(result).toEqual(false);
  });
});
