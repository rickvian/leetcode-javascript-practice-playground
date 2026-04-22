import { addOneRow } from '../0623-add-one-row-to-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0623-add-one-row-to-tree', () => {
  it("addOneRow([3, 9, 20, null, null, 15, 7], 2)", () => {
    const result = addOneRow(arrayToTree([3, 9, 20, null, null, 15, 7]), 2, 1);
    expect(treeToArray(result)).toEqual([2, 3, null, 9, 20, null, null, 15, 7]);
  });

  it("addOneRow([1], 2)", () => {
    const result = addOneRow(arrayToTree([1]), 2, 1);
    expect(treeToArray(result)).toEqual([2, 1]);
  });

  it("addOneRow([], 2)", () => {
    const result = addOneRow(arrayToTree([]), 2, 1);
    expect(treeToArray(result)).toEqual([2]);
  });

  it("addOneRow([1, 2, 3, 4, 5], 2)", () => {
    const result = addOneRow(arrayToTree([1, 2, 3, 4, 5]), 2, 1);
    expect(treeToArray(result)).toEqual([2, 1, null, 2, 3, 4, 5]);
  });

  it("addOneRow([1, null, 2, 3], 2)", () => {
    const result = addOneRow(arrayToTree([1, null, 2, 3]), 2, 1);
    expect(treeToArray(result)).toEqual([2, 1, null, null, 2, 3]);
  });

  it("addOneRow([1, 2], 2)", () => {
    const result = addOneRow(arrayToTree([1, 2]), 2, 1);
    expect(treeToArray(result)).toEqual([2, 1, null, 2]);
  });
});
