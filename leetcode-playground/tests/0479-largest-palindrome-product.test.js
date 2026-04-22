import { largestPalindrome } from '../0479-largest-palindrome-product.js';

describe('0479-largest-palindrome-product', () => {
  it("largestPalindrome(10)", () => {
    const result = largestPalindrome(10);
    expect(result).toEqual(875);
  });
});
