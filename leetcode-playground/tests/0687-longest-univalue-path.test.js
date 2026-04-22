import { longestUnivaluePath } from '../0687-longest-univalue-path.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0687-longest-univalue-path', () => {
  it("longestUnivaluePath([3, 9, 20, null, null, 15, 7])", () => {
    const result = longestUnivaluePath(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(0);
  });

  it("longestUnivaluePath([1])", () => {
    const result = longestUnivaluePath(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("longestUnivaluePath([])", () => {
    const result = longestUnivaluePath(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("longestUnivaluePath([1, 2, 3, 4, 5])", () => {
    const result = longestUnivaluePath(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(0);
  });

  it("longestUnivaluePath([1, null, 2, 3])", () => {
    const result = longestUnivaluePath(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(0);
  });

  it("longestUnivaluePath([1, 2])", () => {
    const result = longestUnivaluePath(arrayToTree([1, 2]));
    expect(result).toEqual(0);
  });
});
