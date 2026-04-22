import { reverseList } from '../0206-reverse-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0206-reverse-linked-list', () => {
  it("reverseList([1, 2, 3, 4, 5])", () => {
    const result = reverseList(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([5, 4, 3, 2, 1]);
  });

  it("reverseList([1])", () => {
    const result = reverseList(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("reverseList([])", () => {
    const result = reverseList(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("reverseList([1, 1, 2])", () => {
    const result = reverseList(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([2, 1, 1]);
  });

  it("reverseList([1, 2])", () => {
    const result = reverseList(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([2, 1]);
  });

  it("reverseList([1, 1, 1, 1])", () => {
    const result = reverseList(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
