import { isPalindrome } from '../0009-palindrome-number.js';

describe('0009-palindrome-number', () => {
  it("isPalindrome(121)", () => {
    const result = isPalindrome(121);
    expect(result).toEqual(true);
  });

  it("isPalindrome(-121)", () => {
    const result = isPalindrome(-121);
    expect(result).toEqual(false);
  });

  it("isPalindrome(10)", () => {
    const result = isPalindrome(10);
    expect(result).toEqual(false);
  });

  it("isPalindrome(0)", () => {
    const result = isPalindrome(0);
    expect(result).toEqual(true);
  });

  it("isPalindrome(-1)", () => {
    const result = isPalindrome(-1);
    expect(result).toEqual(false);
  });

  it("isPalindrome(1534236469)", () => {
    const result = isPalindrome(1534236469);
    expect(result).toEqual(false);
  });
});
