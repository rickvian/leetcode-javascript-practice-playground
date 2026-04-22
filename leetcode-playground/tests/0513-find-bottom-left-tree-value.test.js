import { findBottomLeftValue } from '../0513-find-bottom-left-tree-value.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0513-find-bottom-left-tree-value', () => {
  it("findBottomLeftValue([3, 9, 20, null, null, 15, 7])", () => {
    const result = findBottomLeftValue(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(15);
  });

  it("findBottomLeftValue([1])", () => {
    const result = findBottomLeftValue(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("findBottomLeftValue([1, 2, 3, 4, 5])", () => {
    const result = findBottomLeftValue(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(4);
  });

  it("findBottomLeftValue([1, null, 2, 3])", () => {
    const result = findBottomLeftValue(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("findBottomLeftValue([1, 2])", () => {
    const result = findBottomLeftValue(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
