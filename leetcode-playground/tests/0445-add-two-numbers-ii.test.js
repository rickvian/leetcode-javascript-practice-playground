import { addTwoNumbers } from '../0445-add-two-numbers-ii.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0445-add-two-numbers-ii', () => {
  it("addTwoNumbers([2, 4, 3], [5, 6, 4])", () => {
    const result = addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]));
    expect(listToArray(result)).toEqual([8, 0, 7]);
  });

  it("addTwoNumbers([0], [0])", () => {
    const result = addTwoNumbers(arrayToList([0]), arrayToList([0]));
    expect(listToArray(result)).toEqual([0]);
  });

  it("addTwoNumbers([9, 9, 9], [1])", () => {
    const result = addTwoNumbers(arrayToList([9, 9, 9]), arrayToList([1]));
    expect(listToArray(result)).toEqual([1, 0, 0, 0]);
  });

  it("addTwoNumbers([1, 2, 3], [4, 5, 6])", () => {
    const result = addTwoNumbers(arrayToList([1, 2, 3]), arrayToList([4, 5, 6]));
    expect(listToArray(result)).toEqual([5, 7, 9]);
  });

  it("addTwoNumbers([], [1, 2])", () => {
    const result = addTwoNumbers(arrayToList([]), arrayToList([1, 2]));
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("addTwoNumbers([1], [9, 9])", () => {
    const result = addTwoNumbers(arrayToList([1]), arrayToList([9, 9]));
    expect(listToArray(result)).toEqual([1, 0, 0]);
  });
});
