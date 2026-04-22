import { findTilt } from '../0563-binary-tree-tilt.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0563-binary-tree-tilt', () => {
  it("findTilt([3, 9, 20, null, null, 15, 7])", () => {
    const result = findTilt(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(41);
  });

  it("findTilt([1])", () => {
    const result = findTilt(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("findTilt([])", () => {
    const result = findTilt(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("findTilt([1, 2, 3, 4, 5])", () => {
    const result = findTilt(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(9);
  });

  it("findTilt([1, null, 2, 3])", () => {
    const result = findTilt(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(8);
  });

  it("findTilt([1, 2])", () => {
    const result = findTilt(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
