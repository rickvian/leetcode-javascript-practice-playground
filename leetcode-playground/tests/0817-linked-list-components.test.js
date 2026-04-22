import { numComponents } from '../0817-linked-list-components.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0817-linked-list-components', () => {
  it("numComponents([0, 1, 2, 3], [0, 1, 3])", () => {
    const result = numComponents(arrayToList([0, 1, 2, 3]), [0, 1, 3]);
    expect(result).toEqual(2);
  });

  it("numComponents([0, 1, 2, 3, 4], [0, 3, 1, 4])", () => {
    const result = numComponents(arrayToList([0, 1, 2, 3, 4]), [0, 3, 1, 4]);
    expect(result).toEqual(2);
  });

  it("numComponents([0], [0])", () => {
    const result = numComponents(arrayToList([0]), [0]);
    expect(result).toEqual(1);
  });

  it("numComponents([0, 1, 2], [0, 2])", () => {
    const result = numComponents(arrayToList([0, 1, 2]), [0, 2]);
    expect(result).toEqual(2);
  });

  it("numComponents([0, 1], [1])", () => {
    const result = numComponents(arrayToList([0, 1]), [1]);
    expect(result).toEqual(1);
  });

  it("numComponents([0, 1, 2, 3, 4, 5], [0, 1, 2])", () => {
    const result = numComponents(arrayToList([0, 1, 2, 3, 4, 5]), [0, 1, 2]);
    expect(result).toEqual(1);
  });
});
