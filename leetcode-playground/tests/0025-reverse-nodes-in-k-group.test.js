import { reverseKGroup } from '../0025-reverse-nodes-in-k-group.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0025-reverse-nodes-in-k-group', () => {
  it("reverseKGroup([1, 2, 3, 4, 5], 2)", () => {
    const result = reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
  });

  it("reverseKGroup([1], 2)", () => {
    const result = reverseKGroup(arrayToList([1]), 2);
    expect(listToArray(result)).toEqual([1]);
  });

  it("reverseKGroup([], 2)", () => {
    const result = reverseKGroup(arrayToList([]), 2);
    expect(listToArray(result)).toEqual([]);
  });

  it("reverseKGroup([1, 1, 2], 2)", () => {
    const result = reverseKGroup(arrayToList([1, 1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("reverseKGroup([1, 2], 2)", () => {
    const result = reverseKGroup(arrayToList([1, 2]), 2);
    expect(listToArray(result)).toEqual([2, 1]);
  });

  it("reverseKGroup([1, 1, 1, 1], 2)", () => {
    const result = reverseKGroup(arrayToList([1, 1, 1, 1]), 2);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
