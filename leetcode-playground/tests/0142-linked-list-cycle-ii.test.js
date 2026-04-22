import { detectCycle } from '../0142-linked-list-cycle-ii.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0142-linked-list-cycle-ii', () => {
  it("detectCycle([1, 2, 3, 4, 5])", () => {
    const result = detectCycle(arrayToList([1, 2, 3, 4, 5]));
    expect(listToArray(result)).toEqual([]);
  });

  it("detectCycle([1])", () => {
    const result = detectCycle(arrayToList([1]));
    expect(listToArray(result)).toEqual([]);
  });

  it("detectCycle([])", () => {
    const result = detectCycle(arrayToList([]));
    expect(listToArray(result)).toEqual([]);
  });

  it("detectCycle([1, 1, 2])", () => {
    const result = detectCycle(arrayToList([1, 1, 2]));
    expect(listToArray(result)).toEqual([]);
  });

  it("detectCycle([1, 2])", () => {
    const result = detectCycle(arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([]);
  });

  it("detectCycle([1, 1, 1, 1])", () => {
    const result = detectCycle(arrayToList([1, 1, 1, 1]));
    expect(listToArray(result)).toEqual([]);
  });
});
