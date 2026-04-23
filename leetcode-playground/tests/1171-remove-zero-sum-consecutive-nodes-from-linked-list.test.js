import { removeZeroSumSublists } from '../1171-remove-zero-sum-consecutive-nodes-from-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('1171-remove-zero-sum-consecutive-nodes-from-linked-list', () => {
  it("removeZeroSumSublists([1, 2, 3, 4, 5])", () => {
    const result = removeZeroSumSublists(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("removeZeroSumSublists([1])", () => {
    const result = removeZeroSumSublists(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("removeZeroSumSublists([])", () => {
    const result = removeZeroSumSublists(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("removeZeroSumSublists([1, 1, 2])", () => {
    const result = removeZeroSumSublists(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("removeZeroSumSublists([1, 2])", () => {
    const result = removeZeroSumSublists(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("removeZeroSumSublists([1, 1, 1, 1])", () => {
    const result = removeZeroSumSublists(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
