import { numberOfSubstrings } from '../1358-number-of-substrings-containing-all-three-characters.js';

describe('1358-number-of-substrings-containing-all-three-characters', () => {
  it("numberOfSubstrings(\"abcabcbb\")", () => {
    const result = numberOfSubstrings("abcabcbb");
    expect(result).toEqual(18);
  });

  it("numberOfSubstrings(\"bbbbb\")", () => {
    const result = numberOfSubstrings("bbbbb");
    expect(result).toEqual(0);
  });

  it("numberOfSubstrings(\"pwwkew\")", () => {
    const result = numberOfSubstrings("pwwkew");
    expect(result).toEqual(0);
  });

  it("numberOfSubstrings(\"\")", () => {
    const result = numberOfSubstrings("");
    expect(result).toEqual(0);
  });

  it("numberOfSubstrings(\" \")", () => {
    const result = numberOfSubstrings(" ");
    expect(result).toEqual(0);
  });

  it("numberOfSubstrings(\"a\")", () => {
    const result = numberOfSubstrings("a");
    expect(result).toEqual(0);
  });

  it("numberOfSubstrings(\"aaaaaa\")", () => {
    const result = numberOfSubstrings("aaaaaa");
    expect(result).toEqual(0);
  });
});
