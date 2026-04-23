import { distinctEchoSubstrings } from '../1316-distinct-echo-substrings.js';

describe('1316-distinct-echo-substrings', () => {
  it("distinctEchoSubstrings(\"abcabcbb\")", () => {
    const result = distinctEchoSubstrings("abcabcbb");
    expect(result).toEqual(2);
  });

  it("distinctEchoSubstrings(\"bbbbb\")", () => {
    const result = distinctEchoSubstrings("bbbbb");
    expect(result).toEqual(2);
  });

  it("distinctEchoSubstrings(\"pwwkew\")", () => {
    const result = distinctEchoSubstrings("pwwkew");
    expect(result).toEqual(1);
  });

  it("distinctEchoSubstrings(\"\")", () => {
    const result = distinctEchoSubstrings("");
    expect(result).toEqual(0);
  });

  it("distinctEchoSubstrings(\" \")", () => {
    const result = distinctEchoSubstrings(" ");
    expect(result).toEqual(0);
  });

  it("distinctEchoSubstrings(\"a\")", () => {
    const result = distinctEchoSubstrings("a");
    expect(result).toEqual(0);
  });

  it("distinctEchoSubstrings(\"aaaaaa\")", () => {
    const result = distinctEchoSubstrings("aaaaaa");
    expect(result).toEqual(3);
  });
});
