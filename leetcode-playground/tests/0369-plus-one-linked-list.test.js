import { plusOne } from '../0369-plus-one-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0369-plus-one-linked-list', () => {
  it("plusOne([1, 2, 3, 4, 5])", () => {
    const result = plusOne(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 6]);
  });

  it("plusOne([1])", () => {
    const result = plusOne(arrayToList([1]));
    expect(listToArray(result)).toEqual([2]);
  });

  it("plusOne([])", () => {
    const result = plusOne(arrayToList([]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("plusOne([1, 1, 2])", () => {
    const result = plusOne(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 1, 3]);
  });

  it("plusOne([1, 2])", () => {
    const result = plusOne(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 3]);
  });

  it("plusOne([1, 1, 1, 1])", () => {
    const result = plusOne(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 2]);
  });
});
