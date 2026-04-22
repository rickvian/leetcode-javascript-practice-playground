import { originalDigits } from '../0423-reconstruct-original-digits-from-english.js';

describe('0423-reconstruct-original-digits-from-english', () => {
  it("originalDigits(\"abcabcbb\")", () => {
    const result = originalDigits("abcabcbb");
    expect(result).toEqual("");
  });

  it("originalDigits(\"bbbbb\")", () => {
    const result = originalDigits("bbbbb");
    expect(result).toEqual("");
  });

  it("originalDigits(\"\")", () => {
    const result = originalDigits("");
    expect(result).toEqual("");
  });

  it("originalDigits(\" \")", () => {
    const result = originalDigits(" ");
    expect(result).toEqual("");
  });

  it("originalDigits(\"a\")", () => {
    const result = originalDigits("a");
    expect(result).toEqual("");
  });

  it("originalDigits(\"aaaaaa\")", () => {
    const result = originalDigits("aaaaaa");
    expect(result).toEqual("");
  });
});
