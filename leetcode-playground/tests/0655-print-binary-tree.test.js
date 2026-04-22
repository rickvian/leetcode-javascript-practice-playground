import { printTree } from '../0655-print-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0655-print-binary-tree', () => {
  it("printTree([3, 9, 20, null, null, 15, 7])", () => {
    const result = printTree(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([["", "", "", "3", "", "", ""], ["", "9", "", "", "", "20", ""], ["", "", "", "", "15", "", "7"]]);
  });

  it("printTree([1])", () => {
    const result = printTree(arrayToTree([1]));
    expect(result).toEqual([["1"]]);
  });

  it("printTree([])", () => {
    const result = printTree(arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("printTree([1, 2, 3, 4, 5])", () => {
    const result = printTree(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([["", "", "", "1", "", "", ""], ["", "2", "", "", "", "3", ""], ["4", "", "5", "", "", "", ""]]);
  });

  it("printTree([1, null, 2, 3])", () => {
    const result = printTree(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([["", "", "", "1", "", "", ""], ["", "", "", "", "", "2", ""], ["", "", "", "", "3", "", ""]]);
  });

  it("printTree([1, 2])", () => {
    const result = printTree(arrayToTree([1, 2]));
    expect(result).toEqual([["", "1", ""], ["2", "", ""]]);
  });
});
