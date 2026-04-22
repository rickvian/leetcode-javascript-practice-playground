import { rob } from '../0337-house-robber-iii.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0337-house-robber-iii', () => {
  it("rob([3, 9, 20, null, null, 15, 7])", () => {
    const result = rob(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(31);
  });

  it("rob([1])", () => {
    const result = rob(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("rob([])", () => {
    const result = rob(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("rob([1, 2, 3, 4, 5])", () => {
    const result = rob(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(12);
  });

  it("rob([1, null, 2, 3])", () => {
    const result = rob(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(4);
  });

  it("rob([1, 2])", () => {
    const result = rob(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
