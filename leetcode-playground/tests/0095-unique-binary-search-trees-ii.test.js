import { generateTrees } from '../0095-unique-binary-search-trees-ii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0095-unique-binary-search-trees-ii', () => {
  it("generateTrees(1)", () => {
    const result = generateTrees(1);
    expect(result.map(t => treeToArray(t))).toEqual([[1]]);
  });

  it("generateTrees(2)", () => {
    const result = generateTrees(2);
    expect(result.map(t => treeToArray(t))).toEqual([[1, null, 2], [2, 1]]);
  });

  it("generateTrees(3)", () => {
    const result = generateTrees(3);
    expect(result.map(t => treeToArray(t))).toEqual([[1, null, 2, null, 3], [1, null, 3, 2], [2, 1, 3], [3, 1, null, null, 2], [3, 2, null, 1]]);
  });

  it("generateTrees(4)", () => {
    const result = generateTrees(4);
    expect(result.map(t => treeToArray(t))).toEqual([[1, null, 2, null, 3, null, 4], [1, null, 2, null, 4, 3], [1, null, 3, 2, 4], [1, null, 4, 2, null, null, 3], [1, null, 4, 3, null, 2], [2, 1, 3, null, null, null, 4], [2, 1, 4, null, null, 3], [3, 1, 4, null, 2], [3, 2, 4, 1], [4, 1, null, null, 2, null, 3], [4, 1, null, null, 3, 2], [4, 2, null, 1, 3], [4, 3, null, 1, null, null, 2], [4, 3, null, 2, null, 1]]);
  });
});
