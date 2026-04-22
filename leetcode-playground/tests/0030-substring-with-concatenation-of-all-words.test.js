import { findSubstring } from '../0030-substring-with-concatenation-of-all-words.js';

describe('0030-substring-with-concatenation-of-all-words', () => {
  it("findSubstring([1, 2, 3])", () => {
    const result = findSubstring([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("findSubstring([])", () => {
    const result = findSubstring([]);
    expect(result).toEqual([]);
  });

  it("findSubstring([0])", () => {
    const result = findSubstring([0]);
    expect(result).toEqual([]);
  });

  it("findSubstring([-1, 0, 1])", () => {
    const result = findSubstring([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
