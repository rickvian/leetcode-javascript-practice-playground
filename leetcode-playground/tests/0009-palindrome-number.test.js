import { isPalindrome } from "../0009-palindrome-number";

describe("0009-palindrome-number", () => {
  // Official LeetCode example test cases
  it("should return true for palindrome 121", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("should return false for non-palindrome -121", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("should return false for non-palindrome 10", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  // Additional constraint-based test cases
  it("should return true for single digit 0", () => {
    expect(isPalindrome(0)).toBe(true);
  });

  it("should return true for single digit 5", () => {
    expect(isPalindrome(5)).toBe(true);
  });

  it("should return true for single digit 9", () => {
    expect(isPalindrome(9)).toBe(true);
  });

  it("should return true for single digit 1", () => {
    expect(isPalindrome(1)).toBe(true);
  });

  it("should return false for negative number -1", () => {
    expect(isPalindrome(-1)).toBe(false);
  });

  it("should return false for negative number -999", () => {
    expect(isPalindrome(-999)).toBe(false);
  });

  it("should return false for number ending in 0 like 20", () => {
    expect(isPalindrome(20)).toBe(false);
  });

  it("should return false for number ending in 0 like 100", () => {
    expect(isPalindrome(100)).toBe(false);
  });

  it("should return true for palindrome 101", () => {
    expect(isPalindrome(101)).toBe(true);
  });

  it("should return true for palindrome 1001", () => {
    expect(isPalindrome(1001)).toBe(true);
  });

  it("should return true for palindrome 12321", () => {
    expect(isPalindrome(12321)).toBe(true);
  });

  it("should return false for non-palindrome 123", () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it("should return false for non-palindrome 1234", () => {
    expect(isPalindrome(1234)).toBe(false);
  });

  it("should return true for large palindrome 9009", () => {
    expect(isPalindrome(9009)).toBe(true);
  });

  it("should return true for large palindrome 999999", () => {
    expect(isPalindrome(999999)).toBe(true);
  });

  it("should return true for palindrome 1221", () => {
    expect(isPalindrome(1221)).toBe(true);
  });
});
