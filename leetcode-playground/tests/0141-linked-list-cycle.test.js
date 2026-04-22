import { hasCycle } from '../0141-linked-list-cycle.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0141-linked-list-cycle', () => {
  it("hasCycle([1, 2, 3, 4, 5])", () => {
    const result = hasCycle(arrayToList([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("hasCycle([1])", () => {
    const result = hasCycle(arrayToList([1]));
    expect(result).toEqual(false);
  });

  it("hasCycle([])", () => {
    const result = hasCycle(arrayToList([]));
    expect(result).toEqual(false);
  });

  it("hasCycle([1, 1, 2])", () => {
    const result = hasCycle(arrayToList([1, 1, 2]));
    expect(result).toEqual(false);
  });

  it("hasCycle([1, 2])", () => {
    const result = hasCycle(arrayToList([1, 2]));
    expect(result).toEqual(false);
  });

  it("hasCycle([1, 1, 1, 1])", () => {
    const result = hasCycle(arrayToList([1, 1, 1, 1]));
    expect(result).toEqual(false);
  });
});
