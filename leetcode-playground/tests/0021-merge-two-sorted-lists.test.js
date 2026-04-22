import { mergeTwoLists } from '../0021-merge-two-sorted-lists.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0021-merge-two-sorted-lists', () => {
  it("mergeTwoLists([2, 4, 3], [5, 6, 4])", () => {
    const result = mergeTwoLists(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]));
    expect(listToArray(result)).toEqual([2, 4, 3, 5, 6, 4]);
  });

  it("mergeTwoLists([0], [0])", () => {
    const result = mergeTwoLists(arrayToList([0]), arrayToList([0]));
    expect(listToArray(result)).toEqual([0, 0]);
  });

  it("mergeTwoLists([9, 9, 9], [1])", () => {
    const result = mergeTwoLists(arrayToList([9, 9, 9]), arrayToList([1]));
    expect(listToArray(result)).toEqual([1, 9, 9, 9]);
  });

  it("mergeTwoLists([1, 2, 3], [4, 5, 6])", () => {
    const result = mergeTwoLists(arrayToList([1, 2, 3]), arrayToList([4, 5, 6]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("mergeTwoLists([], [1, 2])", () => {
    const result = mergeTwoLists(arrayToList([]), arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("mergeTwoLists([1], [9, 9])", () => {
    const result = mergeTwoLists(arrayToList([1]), arrayToList([9, 9]));
    expect(listToArray(result)).toEqual([1, 9, 9]);
  });
});
