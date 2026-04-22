import { oddEvenList } from '../0328-odd-even-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0328-odd-even-linked-list', () => {
  it("oddEvenList([1, 2, 3, 4, 5])", () => {
    const result = oddEvenList(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 3, 5, 2, 4]);
  });

  it("oddEvenList([1])", () => {
    const result = oddEvenList(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("oddEvenList([])", () => {
    const result = oddEvenList(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("oddEvenList([1, 1, 2])", () => {
    const result = oddEvenList(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 2, 1]);
  });

  it("oddEvenList([1, 2])", () => {
    const result = oddEvenList(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("oddEvenList([1, 1, 1, 1])", () => {
    const result = oddEvenList(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
