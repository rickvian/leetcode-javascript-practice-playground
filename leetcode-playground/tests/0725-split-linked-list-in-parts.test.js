import { splitListToParts } from '../0725-split-linked-list-in-parts.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0725-split-linked-list-in-parts', () => {
  it("splitListToParts([1, 2, 3, 4, 5], 2)", () => {
    const result = splitListToParts(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[1, 2, 3], [4, 5]]);
  });

  it("splitListToParts([1], 2)", () => {
    const result = splitListToParts(arrayToList([1]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[1], []]);
  });

  it("splitListToParts([], 2)", () => {
    const result = splitListToParts(arrayToList([]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[], []]);
  });

  it("splitListToParts([1, 1, 2], 2)", () => {
    const result = splitListToParts(arrayToList([1, 1, 2]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[1, 1], [2]]);
  });

  it("splitListToParts([1, 2], 2)", () => {
    const result = splitListToParts(arrayToList([1, 2]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[1], [2]]);
  });

  it("splitListToParts([1, 1, 1, 1], 2)", () => {
    const result = splitListToParts(arrayToList([1, 1, 1, 1]), 2);
    expect(result.map(n => listToArray(n))).toEqual([[1, 1], [1, 1]]);
  });
});
