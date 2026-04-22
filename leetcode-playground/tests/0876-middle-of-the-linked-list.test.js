import { middleNode } from '../0876-middle-of-the-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0876-middle-of-the-linked-list', () => {
  it("middleNode([1, 2, 3, 4, 5])", () => {
    const result = middleNode(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([3, 4, 5]);
  });

  it("middleNode([1])", () => {
    const result = middleNode(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("middleNode([])", () => {
    const result = middleNode(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("middleNode([1, 1, 2])", () => {
    const result = middleNode(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("middleNode([1, 2])", () => {
    const result = middleNode(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([2]);
  });

  it("middleNode([1, 1, 1, 1])", () => {
    const result = middleNode(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1]);
  });
});
