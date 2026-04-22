import { longestConsecutive } from '../0298-binary-tree-longest-consecutive-sequence.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0298-binary-tree-longest-consecutive-sequence', () => {
  it("longestConsecutive([3, 9, 20, null, null, 15, 7])", () => {
    const result = longestConsecutive(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(1);
  });

  it("longestConsecutive([1])", () => {
    const result = longestConsecutive(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("longestConsecutive([1, 2, 3, 4, 5])", () => {
    const result = longestConsecutive(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("longestConsecutive([1, null, 2, 3])", () => {
    const result = longestConsecutive(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(3);
  });

  it("longestConsecutive([1, 2])", () => {
    const result = longestConsecutive(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
