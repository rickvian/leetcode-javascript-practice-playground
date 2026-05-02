import { findSubstring } from '../0030-substring-with-concatenation-of-all-words';

describe('0030-substring-with-concatenation-of-all-words', () => {
  it('should handle LeetCode example 1', () => {
    const s = 'barfoothefoobarman';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 9]);
  });

  it('should handle LeetCode example 2', () => {
    const s = 'wordgoodgoodgoodbestword';
    const words = ['word', 'good', 'best', 'word'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([]);
  });

  it('should handle LeetCode example 3', () => {
    const s = 'barfoofoobarthefoobarman';
    const words = ['bar', 'foo', 'the'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([6, 9, 12]);
  });

  it('should return empty array when no concatenation found', () => {
    const s = 'abcdef';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([]);
  });

  it('should handle single word in words array', () => {
    const s = 'foobarfoobar';
    const words = ['foo'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 6]);
  });

  it('should handle single word in words array found at single index', () => {
    const s = 'barfoobar';
    const words = ['foo'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([3]);
  });

  it('should handle duplicate words in words array', () => {
    const s = 'aaaa';
    const words = ['aa', 'aa'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0]);
  });

  it('should handle duplicate words with multiple matches', () => {
    const s = 'barbarbar';
    const words = ['bar', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 3]);
  });

  it('should find concatenation at the very start', () => {
    const s = 'foobar';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0]);
  });

  it('should find concatenation at the very end', () => {
    const s = 'xyzfoobar';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([3]);
  });

  it('should find multiple non-overlapping concatenations', () => {
    const s = 'foobarmankeybarfookey';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 12]);
  });

  it('should return empty for substring shorter than total word length', () => {
    const s = 'abc';
    const words = ['foo', 'bar'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([]);
  });

  it('should handle three words concatenation', () => {
    const s = 'abcdefabcdefabcdef';
    const words = ['abc', 'def', 'abc'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 6]);
  });

  it('should handle words with repeated patterns', () => {
    const s = 'catdog';
    const words = ['cat', 'dog'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0]);
  });

  it('should handle words in different order still matching', () => {
    const s = 'dogcatdog';
    const words = ['cat', 'dog'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 3]);
  });

  it('should find all overlapping valid concatenations', () => {
    const s = 'abababab';
    const words = ['ab', 'ab'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 2, 4]);
  });

  it('should handle empty words array', () => {
    const s = 'foobar';
    const words = [];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([]);
  });

  it('should handle single character words', () => {
    const s = 'abcabc';
    const words = ['a', 'b', 'c'];
    const result = findSubstring(s, words);
    expect(result?.sort((a, b) => a - b)).toEqual([0, 1, 2, 3]);
  });
});
