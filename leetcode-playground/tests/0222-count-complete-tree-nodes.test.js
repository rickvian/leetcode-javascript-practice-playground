import { countNodes } from '../0222-count-complete-tree-nodes.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0222-count-complete-tree-nodes', () => {
  it("countNodes([3, 9, 20, null, null, 15, 7])", () => {
    const result = countNodes(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(5);
  });

  it("countNodes([1])", () => {
    const result = countNodes(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("countNodes([])", () => {
    const result = countNodes(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("countNodes([1, 2, 3, 4, 5])", () => {
    const result = countNodes(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(5);
  });

  it("countNodes([1, null, 2, 3])", () => {
    const result = countNodes(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("countNodes([1, 2])", () => {
    const result = countNodes(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
