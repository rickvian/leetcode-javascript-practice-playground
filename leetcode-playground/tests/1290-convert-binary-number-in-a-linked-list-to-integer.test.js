import { getDecimalValue } from '../1290-convert-binary-number-in-a-linked-list-to-integer.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('1290-convert-binary-number-in-a-linked-list-to-integer', () => {
  it("getDecimalValue([1, 2, 3, 4, 5])", () => {
    const result = getDecimalValue(arrayToList([1, 2, 3, 4, 5]));
    expect(result).toEqual(1);
  });

  it("getDecimalValue([1])", () => {
    const result = getDecimalValue(arrayToList([1]));
    expect(result).toEqual(1);
  });

  it("getDecimalValue([1, 1, 2])", () => {
    const result = getDecimalValue(arrayToList([1, 1, 2]));
    expect(result).toEqual(3);
  });

  it("getDecimalValue([1, 2])", () => {
    const result = getDecimalValue(arrayToList([1, 2]));
    expect(result).toEqual(1);
  });

  it("getDecimalValue([1, 1, 1, 1])", () => {
    const result = getDecimalValue(arrayToList([1, 1, 1, 1]));
    expect(result).toEqual(15);
  });
});
