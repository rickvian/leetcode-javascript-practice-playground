import { deleteDuplicates } from '../0082-remove-duplicates-from-sorted-list-ii.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0082-remove-duplicates-from-sorted-list-ii', () => {
  it("deleteDuplicates([1, 2, 3, 4, 5])", () => {
    const result = deleteDuplicates(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("deleteDuplicates([1])", () => {
    const result = deleteDuplicates(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("deleteDuplicates([])", () => {
    const result = deleteDuplicates(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("deleteDuplicates([1, 1, 2])", () => {
    const result = deleteDuplicates(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([2]);
  });

  it("deleteDuplicates([1, 2])", () => {
    const result = deleteDuplicates(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("deleteDuplicates([1, 1, 1, 1])", () => {
    const result = deleteDuplicates(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([]);
  });
});
