import { rotateRight } from '../0061-rotate-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0061-rotate-list', () => {
  it("rotateRight([1, 2, 3, 4, 5], 2)", () => {
    const result = rotateRight(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([4, 5, 1, 2, 3]);
  });

  it("rotateRight([1], 2)", () => {
    const result = rotateRight(arrayToList([1]), 2);
    expect(listToArray(result)).toEqual([1]);
  });

  it("rotateRight([], 2)", () => {
    const result = rotateRight(arrayToList([]), 2);
    expect(listToArray(result)).toEqual([]);
  });

  it("rotateRight([1, 1, 2], 2)", () => {
    const result = rotateRight(arrayToList([1, 1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 2, 1]);
  });

  it("rotateRight([1, 2], 2)", () => {
    const result = rotateRight(arrayToList([1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("rotateRight([1, 1, 1, 1], 2)", () => {
    const result = rotateRight(arrayToList([1, 1, 1, 1]), 2);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
