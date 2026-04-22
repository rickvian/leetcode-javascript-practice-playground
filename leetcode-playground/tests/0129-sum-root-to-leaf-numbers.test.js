import { sumNumbers } from '../0129-sum-root-to-leaf-numbers.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0129-sum-root-to-leaf-numbers', () => {
  it("sumNumbers([3, 9, 20, null, null, 15, 7])", () => {
    const result = sumNumbers(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(35261);
  });

  it("sumNumbers([1])", () => {
    const result = sumNumbers(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("sumNumbers([1, 2, 3, 4, 5])", () => {
    const result = sumNumbers(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(262);
  });

  it("sumNumbers([1, null, 2, 3])", () => {
    const result = sumNumbers(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(123);
  });

  it("sumNumbers([1, 2])", () => {
    const result = sumNumbers(arrayToTree([1, 2]));
    expect(result).toEqual(12);
  });
});
