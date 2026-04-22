import { primePalindrome } from '../0866-prime-palindrome.js';

describe('0866-prime-palindrome', () => {
  it("primePalindrome(121)", () => {
    const result = primePalindrome(121);
    expect(result).toEqual(131);
  });

  it("primePalindrome(-121)", () => {
    const result = primePalindrome(-121);
    expect(result).toEqual(2);
  });

  it("primePalindrome(10)", () => {
    const result = primePalindrome(10);
    expect(result).toEqual(11);
  });

  it("primePalindrome(0)", () => {
    const result = primePalindrome(0);
    expect(result).toEqual(2);
  });

  it("primePalindrome(-1)", () => {
    const result = primePalindrome(-1);
    expect(result).toEqual(2);
  });

  it("primePalindrome(1534236469)", () => {
    const result = primePalindrome(1534236469);
    expect(result).toEqual(10000500001);
  });
});
