import { deleteDuplicates } from '../0083-remove-duplicates-from-sorted-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0083-remove-duplicates-from-sorted-list', () => {
  it("deleteDuplicates([])", () => {
    const result = deleteDuplicates(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });
});
