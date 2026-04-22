import { partition } from '../0086-partition-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0086-partition-list', () => {
  it("partition([1, 2, 3, 4, 5], 2)", () => {
    const result = partition(arrayToList([1, 2, 3, 4, 5]), 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("partition([1], 2)", () => {
    const result = partition(arrayToList([1]), 2);
    expect(listToArray(result)).toEqual([1]);
  });

  it("partition([], 2)", () => {
    const result = partition(arrayToList([]), 2);
    expect(listToArray(result)).toEqual([]);
  });

  it("partition([1, 1, 2], 2)", () => {
    const result = partition(arrayToList([1, 1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("partition([1, 2], 2)", () => {
    const result = partition(arrayToList([1, 2]), 2);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("partition([1, 1, 1, 1], 2)", () => {
    const result = partition(arrayToList([1, 1, 1, 1]), 2);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
