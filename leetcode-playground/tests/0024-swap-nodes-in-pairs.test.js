import { swapPairs } from '../0024-swap-nodes-in-pairs.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0024-swap-nodes-in-pairs', () => {
  it("swapPairs([1, 2, 3, 4, 5])", () => {
    const result = swapPairs(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
  });

  it("swapPairs([1])", () => {
    const result = swapPairs(arrayToList([1]));
    expect(listToArray(result)).toEqual([1]);
  });

  it("swapPairs([])", () => {
    const result = swapPairs(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("swapPairs([1, 1, 2])", () => {
    const result = swapPairs(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([1, 1, 2]);
  });

  it("swapPairs([1, 2])", () => {
    const result = swapPairs(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([2, 1]);
  });

  it("swapPairs([1, 1, 1, 1])", () => {
    const result = swapPairs(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });
});
