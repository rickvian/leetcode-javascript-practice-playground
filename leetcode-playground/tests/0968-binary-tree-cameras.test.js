import { minCameraCover } from '../0968-binary-tree-cameras.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0968-binary-tree-cameras', () => {
  it("minCameraCover([3, 9, 20, null, null, 15, 7])", () => {
    const result = minCameraCover(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(2);
  });

  it("minCameraCover([1])", () => {
    const result = minCameraCover(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("minCameraCover([])", () => {
    const result = minCameraCover(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("minCameraCover([1, 2, 3, 4, 5])", () => {
    const result = minCameraCover(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("minCameraCover([1, null, 2, 3])", () => {
    const result = minCameraCover(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(1);
  });

  it("minCameraCover([1, 2])", () => {
    const result = minCameraCover(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
