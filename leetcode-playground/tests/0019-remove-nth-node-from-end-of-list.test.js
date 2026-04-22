import { removeNthFromEnd } from '../0019-remove-nth-node-from-end-of-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0019-remove-nth-node-from-end-of-list', () => {
  it("removeNthFromEnd([1, 2, 3, 4, 5], 2)", () => {
    const result = removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 5]);
  });

  it("removeNthFromEnd([1, 1, 2], 2)", () => {
    const result = removeNthFromEnd(arrayToList([1, 1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("removeNthFromEnd([1, 2], 2)", () => {
    const result = removeNthFromEnd(arrayToList([1, 2]), 2);
    expect(listToArray(result)).toEqual([2]);
  });

  it("removeNthFromEnd([1, 1, 1, 1], 2)", () => {
    const result = removeNthFromEnd(arrayToList([1, 1, 1, 1]), 2);
    expect(listToArray(result)).toEqual([1, 1, 1]);
  });
});
