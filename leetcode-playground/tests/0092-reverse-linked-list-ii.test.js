import { reverseBetween } from '../0092-reverse-linked-list-ii.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0092-reverse-linked-list-ii', () => {
  it("reverseBetween([1, 2, 3, 4, 5], 1)", () => {
    const result = reverseBetween(arrayToList([1, 2, 3, 4, 5]), 1, 1);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("reverseBetween([1], 1)", () => {
    const result = reverseBetween(arrayToList([1]), 1, 1);
    expect(listToArray(result)).toEqual([1]);
  });

  it("reverseBetween([], 1)", () => {
    const result = reverseBetween(arrayToList([]), 1, 1);
    expect(listToArray(result)).toEqual([]);
  });

  it("reverseBetween([1, 1, 2], 1)", () => {
    const result = reverseBetween(arrayToList([1, 1, 2]), 1, 1);
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("reverseBetween([1, 2], 1)", () => {
    const result = reverseBetween(arrayToList([1, 2]), 1, 1);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("reverseBetween([1, 1, 1, 1], 1)", () => {
    const result = reverseBetween(arrayToList([1, 1, 1, 1]), 1, 1);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
