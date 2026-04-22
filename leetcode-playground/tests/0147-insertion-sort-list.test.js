import { insertionSortList } from '../0147-insertion-sort-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0147-insertion-sort-list', () => {
  it("insertionSortList([1, 2, 3, 4, 5])", () => {
    const result = insertionSortList(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("insertionSortList([1])", () => {
    const result = insertionSortList(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("insertionSortList([])", () => {
    const result = insertionSortList(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("insertionSortList([1, 1, 2])", () => {
    const result = insertionSortList(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("insertionSortList([1, 2])", () => {
    const result = insertionSortList(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("insertionSortList([1, 1, 1, 1])", () => {
    const result = insertionSortList(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
