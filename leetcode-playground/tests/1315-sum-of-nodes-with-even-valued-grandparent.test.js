import { sumEvenGrandparent } from '../1315-sum-of-nodes-with-even-valued-grandparent.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1315-sum-of-nodes-with-even-valued-grandparent', () => {
  it("sumEvenGrandparent([3, 9, 20, null, null, 15, 7])", () => {
    const result = sumEvenGrandparent(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(0);
  });

  it("sumEvenGrandparent([1])", () => {
    const result = sumEvenGrandparent(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("sumEvenGrandparent([])", () => {
    const result = sumEvenGrandparent(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("sumEvenGrandparent([1, 2, 3, 4, 5])", () => {
    const result = sumEvenGrandparent(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(0);
  });

  it("sumEvenGrandparent([1, null, 2, 3])", () => {
    const result = sumEvenGrandparent(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(0);
  });

  it("sumEvenGrandparent([1, 2])", () => {
    const result = sumEvenGrandparent(arrayToTree([1, 2]));
    expect(result).toEqual(0);
  });
});
