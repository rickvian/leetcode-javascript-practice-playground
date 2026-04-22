import { isPalindrome } from '../0234-palindrome-linked-list.js';
import { arrayToList, listToArray } from './__helpers__/test_helpers.js';

describe('0234-palindrome-linked-list', () => {
  it("isPalindrome([1, 2, 3, 4, 5])", () => {
    const result = isPalindrome(arrayToList([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it("isPalindrome([1])", () => {
    const result = isPalindrome(arrayToList([1]));
    expect(result).toEqual(true);
  });

  it("isPalindrome([])", () => {
    const result = isPalindrome(arrayToList([]));
    expect(result).toEqual(true);
  });

  it("isPalindrome([1, 1, 2])", () => {
    const result = isPalindrome(arrayToList([1, 1, 2]));
    expect(result).toEqual(false);
  });

  it("isPalindrome([1, 2])", () => {
    const result = isPalindrome(arrayToList([1, 2]));
    expect(result).toEqual(false);
  });

  it("isPalindrome([1, 1, 1, 1])", () => {
    const result = isPalindrome(arrayToList([1, 1, 1, 1]));
    expect(result).toEqual(true);
  });
});
