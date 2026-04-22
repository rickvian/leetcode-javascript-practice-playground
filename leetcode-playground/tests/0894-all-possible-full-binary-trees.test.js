import { allPossibleFBT } from '../0894-all-possible-full-binary-trees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0894-all-possible-full-binary-trees', () => {
  it("allPossibleFBT(1)", () => {
    const result = allPossibleFBT(1);
    expect(result.map(t => treeToArray(t))).toEqual([[0]]);
  });

  it("allPossibleFBT(3)", () => {
    const result = allPossibleFBT(3);
    expect(result.map(t => treeToArray(t))).toEqual([[0, 0, 0]]);
  });

  it("allPossibleFBT(5)", () => {
    const result = allPossibleFBT(5);
    expect(result.map(t => treeToArray(t))).toEqual([[0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0]]);
  });

  it("allPossibleFBT(7)", () => {
    const result = allPossibleFBT(7);
    expect(result.map(t => treeToArray(t))).toEqual([[0, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0]]);
  });

  it("allPossibleFBT(9)", () => {
    const result = allPossibleFBT(9);
    expect(result.map(t => treeToArray(t))).toEqual([[0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0]]);
  });

  it("allPossibleFBT(11)", () => {
    const result = allPossibleFBT(11);
    expect(result.map(t => treeToArray(t))).toEqual([[0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0], [0, 0, 0, 0, 0, null, null, 0, 0, null, null, 0, 0, null, null, 0, 0]]);
  });
});
