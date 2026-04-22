import { nearestPalindromic } from '../0564-find-the-closest-palindrome.js';

describe('0564-find-the-closest-palindrome', () => {
  it("nearestPalindromic(\"\")", () => {
    const result = nearestPalindromic("");
    expect(result).toEqual("-1");
  });

  it("nearestPalindromic(\" \")", () => {
    const result = nearestPalindromic(" ");
    expect(result).toEqual("-1");
  });
});
