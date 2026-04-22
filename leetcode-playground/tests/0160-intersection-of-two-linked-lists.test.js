import { getIntersectionNode } from '../0160-intersection-of-two-linked-lists.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0160-intersection-of-two-linked-lists', () => {
  it("getIntersectionNode([2, 4, 3], [5, 6, 4])", () => {
    const result = getIntersectionNode(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]));
    expect(listToArray(result)).toEqual([]);
  });

  it("getIntersectionNode([0], [0])", () => {
    const result = getIntersectionNode(arrayToList([0]), arrayToList([0]));
    expect(listToArray(result)).toEqual([]);
  });

  it("getIntersectionNode([9, 9, 9], [1])", () => {
    const result = getIntersectionNode(arrayToList([9, 9, 9]), arrayToList([1]));
    expect(listToArray(result)).toEqual([]);
  });

  it("getIntersectionNode([1, 2, 3], [4, 5, 6])", () => {
    const result = getIntersectionNode(arrayToList([1, 2, 3]), arrayToList([4, 5, 6]));
    expect(listToArray(result)).toEqual([]);
  });

  it("getIntersectionNode([], [1, 2])", () => {
    const result = getIntersectionNode(arrayToList([]), arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([]);
  });

  it("getIntersectionNode([1], [9, 9])", () => {
    const result = getIntersectionNode(arrayToList([1]), arrayToList([9, 9]));
    expect(listToArray(result)).toEqual([]);
  });
});
