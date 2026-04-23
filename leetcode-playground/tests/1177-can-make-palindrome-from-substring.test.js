import { canMakePaliQueries } from '../1177-can-make-palindrome-from-substring.js';

describe('1177-can-make-palindrome-from-substring', () => {
  it("canMakePaliQueries(\"abcda\", [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]])", () => {
    const result = canMakePaliQueries("abcda", [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]]);
    expect(result).toEqual([true, false, false, true, true]);
  });

  it("canMakePaliQueries(\"lyb\", [[0, 1, 0], [2, 2, 1]])", () => {
    const result = canMakePaliQueries("lyb", [[0, 1, 0], [2, 2, 1]]);
    expect(result).toEqual([false, true]);
  });

  it("canMakePaliQueries(\"a\", [[0, 0, 0]])", () => {
    const result = canMakePaliQueries("a", [[0, 0, 0]]);
    expect(result).toEqual([true]);
  });

  it("canMakePaliQueries(\"aab\", [[0, 2, 0], [0, 2, 1]])", () => {
    const result = canMakePaliQueries("aab", [[0, 2, 0], [0, 2, 1]]);
    expect(result).toEqual([true, true]);
  });

  it("canMakePaliQueries(\"abcd\", [[0, 3, 0], [0, 3, 1], [0, 3, 2]])", () => {
    const result = canMakePaliQueries("abcd", [[0, 3, 0], [0, 3, 1], [0, 3, 2]]);
    expect(result).toEqual([false, false, true]);
  });
});
