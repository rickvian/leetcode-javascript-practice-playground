import { palindromePartition } from '../1278-palindrome-partitioning-iii.js';

describe('1278-palindrome-partitioning-iii', () => {
  it("palindromePartition(\"abcdef\", 2)", () => {
    const result = palindromePartition("abcdef", 2);
    expect(result).toEqual(2);
  });

  it("palindromePartition(\"a\", 1)", () => {
    const result = palindromePartition("a", 1);
    expect(result).toEqual(0);
  });

  it("palindromePartition(\"abba\", 3)", () => {
    const result = palindromePartition("abba", 3);
    expect(result).toEqual(0);
  });

  it("palindromePartition(\"  hello  \", 2)", () => {
    const result = palindromePartition("  hello  ", 2);
    expect(result).toEqual(2);
  });
});
