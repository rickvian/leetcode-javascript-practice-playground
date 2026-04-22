import { pushDominoes } from '../0838-push-dominoes.js';

describe('0838-push-dominoes', () => {
  it("pushDominoes(\"abcabcbb\")", () => {
    const result = pushDominoes("abcabcbb");
    expect(result).toEqual("........");
  });

  it("pushDominoes(\"bbbbb\")", () => {
    const result = pushDominoes("bbbbb");
    expect(result).toEqual(".....");
  });

  it("pushDominoes(\"pwwkew\")", () => {
    const result = pushDominoes("pwwkew");
    expect(result).toEqual("......");
  });

  it("pushDominoes(\"\")", () => {
    const result = pushDominoes("");
    expect(result).toEqual("");
  });

  it("pushDominoes(\" \")", () => {
    const result = pushDominoes(" ");
    expect(result).toEqual(".");
  });

  it("pushDominoes(\"a\")", () => {
    const result = pushDominoes("a");
    expect(result).toEqual(".");
  });

  it("pushDominoes(\"aaaaaa\")", () => {
    const result = pushDominoes("aaaaaa");
    expect(result).toEqual("......");
  });
});
