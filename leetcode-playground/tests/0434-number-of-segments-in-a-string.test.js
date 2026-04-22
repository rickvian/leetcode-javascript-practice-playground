import { countSegments } from '../0434-number-of-segments-in-a-string.js';

describe('0434-number-of-segments-in-a-string', () => {
  it("countSegments(\"abcabcbb\")", () => {
    const result = countSegments("abcabcbb");
    expect(result).toEqual(1);
  });

  it("countSegments(\"bbbbb\")", () => {
    const result = countSegments("bbbbb");
    expect(result).toEqual(1);
  });

  it("countSegments(\"pwwkew\")", () => {
    const result = countSegments("pwwkew");
    expect(result).toEqual(1);
  });

  it("countSegments(\"\")", () => {
    const result = countSegments("");
    expect(result).toEqual(0);
  });

  it("countSegments(\" \")", () => {
    const result = countSegments(" ");
    expect(result).toEqual(0);
  });

  it("countSegments(\"a\")", () => {
    const result = countSegments("a");
    expect(result).toEqual(1);
  });

  it("countSegments(\"aaaaaa\")", () => {
    const result = countSegments("aaaaaa");
    expect(result).toEqual(1);
  });
});
