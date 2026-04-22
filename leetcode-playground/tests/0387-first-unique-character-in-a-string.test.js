import { firstUniqChar } from '../0387-first-unique-character-in-a-string.js';

describe('0387-first-unique-character-in-a-string', () => {
  it("firstUniqChar(\"abcabcbb\")", () => {
    const result = firstUniqChar("abcabcbb");
    expect(result).toEqual(-1);
  });

  it("firstUniqChar(\"bbbbb\")", () => {
    const result = firstUniqChar("bbbbb");
    expect(result).toEqual(-1);
  });

  it("firstUniqChar(\"pwwkew\")", () => {
    const result = firstUniqChar("pwwkew");
    expect(result).toEqual(0);
  });

  it("firstUniqChar(\"\")", () => {
    const result = firstUniqChar("");
    expect(result).toEqual(-1);
  });

  it("firstUniqChar(\" \")", () => {
    const result = firstUniqChar(" ");
    expect(result).toEqual(0);
  });

  it("firstUniqChar(\"a\")", () => {
    const result = firstUniqChar("a");
    expect(result).toEqual(0);
  });

  it("firstUniqChar(\"aaaaaa\")", () => {
    const result = firstUniqChar("aaaaaa");
    expect(result).toEqual(-1);
  });
});
