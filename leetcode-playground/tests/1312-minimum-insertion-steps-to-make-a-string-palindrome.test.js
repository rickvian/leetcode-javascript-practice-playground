import { minInsertions } from '../1312-minimum-insertion-steps-to-make-a-string-palindrome.js';

describe('1312-minimum-insertion-steps-to-make-a-string-palindrome', () => {
  it("minInsertions(\"abcabcbb\")", () => {
    const result = minInsertions("abcabcbb");
    expect(result).toEqual(3);
  });

  it("minInsertions(\"bbbbb\")", () => {
    const result = minInsertions("bbbbb");
    expect(result).toEqual(0);
  });

  it("minInsertions(\"pwwkew\")", () => {
    const result = minInsertions("pwwkew");
    expect(result).toEqual(3);
  });

  it("minInsertions(\" \")", () => {
    const result = minInsertions(" ");
    expect(result).toEqual(0);
  });

  it("minInsertions(\"a\")", () => {
    const result = minInsertions("a");
    expect(result).toEqual(0);
  });

  it("minInsertions(\"aaaaaa\")", () => {
    const result = minInsertions("aaaaaa");
    expect(result).toEqual(0);
  });
});
