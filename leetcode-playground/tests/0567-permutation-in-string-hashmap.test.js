import { checkInclusion } from '../0567-permutation-in-string-hashmap';

describe('0567-permutation-in-string-hashmap', () => {
  // --- happy path ---
  it('should return true when s2 contains a permutation of s1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });

  it('should return false when s2 does not contain any permutation of s1', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });

  it('should return true when permutation is at the start of s2', () => {
    expect(checkInclusion('abc', 'cbaxyz')).toBe(true);
  });

  it('should return true when permutation is at the end of s2', () => {
    expect(checkInclusion('abc', 'xyzabc')).toBe(true);
  });

  it('should return true when s1 equals s2', () => {
    expect(checkInclusion('abc', 'abc')).toBe(true);
  });

  it('should return true when s1 is a single character present in s2', () => {
    expect(checkInclusion('a', 'b')).toBe(false);
    expect(checkInclusion('a', 'a')).toBe(true);
  });

  // --- edge: empty / minimum ---
  it('should return true when s1 is empty (vacuously a permutation)', () => {
    expect(checkInclusion('', 'abc')).toBe(true);
  });

  it('should return false when s1 is longer than s2', () => {
    expect(checkInclusion('abcd', 'abc')).toBe(false);
  });

  // --- edge: repetitive characters ---
  it('should return true when s1 has repeated chars and s2 contains the exact counts', () => {
    expect(checkInclusion('aab', 'aabcd')).toBe(true);
  });

  it('should return false when s2 window has fewer repeated chars than s1 needs', () => {
    expect(checkInclusion('aab', 'abcd')).toBe(false);
  });

  it('should handle a long string of identical characters', () => {
    expect(checkInclusion('aaa', 'aaaa')).toBe(true);
    expect(checkInclusion('aaaa', 'aaa')).toBe(false);
  });

  // --- edge: chars in window but not in s1 ---
  it('should ignore s2 characters that are not in s1', () => {
    expect(checkInclusion('ab', 'xyzba')).toBe(true);
  });

  // --- edge: range limits ---
  it('should return true when s1 and s2 are both length 1 and equal', () => {
    expect(checkInclusion('z', 'z')).toBe(true);
  });

  it('should return false when s1 and s2 are both length 1 and differ', () => {
    expect(checkInclusion('a', 'z')).toBe(false);
  });

  // --- edge: type nuance / unexpected input ---
  it('should return false for s1 with characters not present in s2 at all', () => {
    expect(checkInclusion('abc', 'defghi')).toBe(false);
  });
});
