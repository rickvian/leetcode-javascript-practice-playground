import { reorganizeString } from '../0767-reorganize-string.js';

describe('0767-reorganize-string', () => {
  it("reorganizeString(\"abcabcbb\")", () => {
    const result = reorganizeString("abcabcbb");
    expect(result).toEqual("bababcbc");
  });

  it("reorganizeString(\"bbbbb\")", () => {
    const result = reorganizeString("bbbbb");
    expect(result).toEqual("");
  });

  it("reorganizeString(\"pwwkew\")", () => {
    const result = reorganizeString("pwwkew");
    expect(result).toEqual("wpwkwe");
  });

  it("reorganizeString(\" \")", () => {
    const result = reorganizeString(" ");
    expect(result).toEqual(" ");
  });

  it("reorganizeString(\"a\")", () => {
    const result = reorganizeString("a");
    expect(result).toEqual("a");
  });

  it("reorganizeString(\"aaaaaa\")", () => {
    const result = reorganizeString("aaaaaa");
    expect(result).toEqual("");
  });
});
