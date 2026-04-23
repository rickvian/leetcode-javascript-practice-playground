import { flipEquiv } from '../0951-flip-equivalent-binary-trees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0951-flip-equivalent-binary-trees', () => {
  it("flipEquiv([1, 2, 3], [1, 2, 3])", () => {
    const result = flipEquiv(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual(true);
  });

  it("flipEquiv([1], [1])", () => {
    const result = flipEquiv(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("flipEquiv([], [])", () => {
    const result = flipEquiv(arrayToTree([]), arrayToTree([]));
    expect(result).toEqual(true);
  });

  it("flipEquiv([1, 2], [1, null, 2])", () => {
    const result = flipEquiv(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual(true);
  });
});
