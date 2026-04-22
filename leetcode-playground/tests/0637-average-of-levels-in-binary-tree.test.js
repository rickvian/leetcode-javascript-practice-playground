import { averageOfLevels } from '../0637-average-of-levels-in-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0637-average-of-levels-in-binary-tree', () => {
  it("averageOfLevels([3, 9, 20, null, null, 15, 7])", () => {
    const result = averageOfLevels(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual([3, 14.5, 11]);
  });

  it("averageOfLevels([1])", () => {
    const result = averageOfLevels(arrayToTree([1]));
    expect(result).toEqual([1]);
  });

  it("averageOfLevels([1, 2, 3, 4, 5])", () => {
    const result = averageOfLevels(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual([1, 2.5, 4.5]);
  });

  it("averageOfLevels([1, null, 2, 3])", () => {
    const result = averageOfLevels(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual([1, 2, 3]);
  });

  it("averageOfLevels([1, 2])", () => {
    const result = averageOfLevels(arrayToTree([1, 2]));
    expect(result).toEqual([1, 2]);
  });
});
