import { mergeKLists } from '../0023-merge-k-sorted-lists.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0023-merge-k-sorted-lists', () => {
  it("mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]])", () => {
    const result = mergeKLists([arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])]);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it("mergeKLists([[], [], []])", () => {
    const result = mergeKLists([arrayToList([]), arrayToList([]), arrayToList([])]);
    expect(listToArray(result)).toEqual([]);
  });

  it("mergeKLists([[1], [2], [3]])", () => {
    const result = mergeKLists([arrayToList([1]), arrayToList([2]), arrayToList([3])]);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it("mergeKLists([[1, 2], [3, 4], [5]])", () => {
    const result = mergeKLists([arrayToList([1, 2]), arrayToList([3, 4]), arrayToList([5])]);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("mergeKLists([[-1, 0], [1, 2]])", () => {
    const result = mergeKLists([arrayToList([-1, 0]), arrayToList([1, 2])]);
    expect(listToArray(result)).toEqual([-1, 0, 1, 2]);
  });

  it("mergeKLists([[]])", () => {
    const result = mergeKLists([arrayToList([])]);
    expect(listToArray(result)).toEqual([]);
  });
});
