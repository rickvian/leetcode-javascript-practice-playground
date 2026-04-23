import { nextLargerNodes } from '../1019-next-greater-node-in-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('1019-next-greater-node-in-linked-list', () => {
  it("nextLargerNodes([1, 2, 3, 4, 5])", () => {
    const result = nextLargerNodes(arrayToList([1, 2, 3, 4, 5]));
    expect(result).toEqual([2, 3, 4, 5, 0]);
  });

  it("nextLargerNodes([1])", () => {
    const result = nextLargerNodes(arrayToList([1]));
    expect(result).toEqual([0]);
  });

  it("nextLargerNodes([])", () => {
    const result = nextLargerNodes(arrayToList([]));
    expect(result).toEqual([]);
  });

  it("nextLargerNodes([1, 1, 2])", () => {
    const result = nextLargerNodes(arrayToList([1, 1, 2]));
    expect(result).toEqual([2, 2, 0]);
  });

  it("nextLargerNodes([1, 2])", () => {
    const result = nextLargerNodes(arrayToList([1, 2]));
    expect(result).toEqual([2, 0]);
  });

  it("nextLargerNodes([1, 1, 1, 1])", () => {
    const result = nextLargerNodes(arrayToList([1, 1, 1, 1]));
    expect(result).toEqual([0, 0, 0, 0]);
  });
});
