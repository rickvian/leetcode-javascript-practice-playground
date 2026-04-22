import { removeElements } from '../0203-remove-linked-list-elements.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0203-remove-linked-list-elements', () => {
  it("removeElements([1, 2, 3, 4, 5], 2)", () => {
    const result = removeElements(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([1, 3, 4, 5]);
  });

  it("removeElements([1], 2)", () => {
    const result = removeElements(arrayToList([1]), 2);
    expect(listToArray(result)).toEqual([1]);
  });

  it("removeElements([], 2)", () => {
    const result = removeElements(arrayToList([]), 2);
    expect(listToArray(result)).toEqual([]);
  });

  it("removeElements([1, 1, 2], 2)", () => {
    const result = removeElements(arrayToList([1, 1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 1]);
  });

  it("removeElements([1, 2], 2)", () => {
    const result = removeElements(arrayToList([1, 2]), 2);
    expect(listToArray(result)).toEqual([1]);
  });

  it("removeElements([1, 1, 1, 1], 2)", () => {
    const result = removeElements(arrayToList([1, 1, 1, 1]), 2);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
