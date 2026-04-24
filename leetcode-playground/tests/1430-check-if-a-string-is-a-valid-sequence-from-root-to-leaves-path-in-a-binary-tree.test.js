import { isValidSequence } from '../1430-check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1430-check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree', () => {
  it("isValidSequence([3, 9, 20, null, null, 15, 7], 0)", () => {
    const result = isValidSequence(arrayToTree([3, 9, 20, null, null, 15, 7]), 0);
    expect(result).toEqual(false);
  });

  it("isValidSequence([1], 0)", () => {
    const result = isValidSequence(arrayToTree([1]), 0);
    expect(result).toEqual(false);
  });

  it("isValidSequence([], 0)", () => {
    const result = isValidSequence(arrayToTree([]), 0);
    expect(result).toEqual(false);
  });

  it("isValidSequence([1, 2, 3, 4, 5], 0)", () => {
    const result = isValidSequence(arrayToTree([1, 2, 3, 4, 5]), 0);
    expect(result).toEqual(false);
  });

  it("isValidSequence([1, null, 2, 3], 0)", () => {
    const result = isValidSequence(arrayToTree([1, null, 2, 3]), 0);
    expect(result).toEqual(false);
  });

  it("isValidSequence([1, 2], 0)", () => {
    const result = isValidSequence(arrayToTree([1, 2]), 0);
    expect(result).toEqual(false);
  });
});
