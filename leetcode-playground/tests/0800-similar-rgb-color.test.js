import { similarRGB } from '../0800-similar-rgb-color.js';

describe('0800-similar-rgb-color', () => {
  it("similarRGB(\"abcabcbb\")", () => {
    const result = similarRGB("abcabcbb");
    expect(result).toEqual("#bbaacc");
  });

  it("similarRGB(\"bbbbb\")", () => {
    const result = similarRGB("bbbbb");
    expect(result).toEqual("#bbbb");
  });

  it("similarRGB(\"pwwkew\")", () => {
    const result = similarRGB("pwwkew");
    expect(result).toEqual("#");
  });

  it("similarRGB(\"\")", () => {
    const result = similarRGB("");
    expect(result).toEqual("#");
  });

  it("similarRGB(\" \")", () => {
    const result = similarRGB(" ");
    expect(result).toEqual("#");
  });

  it("similarRGB(\"a\")", () => {
    const result = similarRGB("a");
    expect(result).toEqual("#");
  });

  it("similarRGB(\"aaaaaa\")", () => {
    const result = similarRGB("aaaaaa");
    expect(result).toEqual("#aaaa11");
  });
});
