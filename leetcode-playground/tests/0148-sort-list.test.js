import { sortList } from '../0148-sort-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0148-sort-list', () => {
  it("sortList([1, 2, 3, 4, 5])", () => {
    const result = sortList(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("sortList([1])", () => {
    const result = sortList(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("sortList([])", () => {
    const result = sortList(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("sortList([1, 1, 2])", () => {
    const result = sortList(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("sortList([1, 2])", () => {
    const result = sortList(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("sortList([1, 1, 1, 1])", () => {
    const result = sortList(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
