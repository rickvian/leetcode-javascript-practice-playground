import { minAddToMakeValid } from '../0921-minimum-add-to-make-parentheses-valid.js';

describe('0921-minimum-add-to-make-parentheses-valid', () => {
  it("minAddToMakeValid(\"abcabcbb\")", () => {
    const result = minAddToMakeValid("abcabcbb");
    expect(result).toEqual(8);
  });

  it("minAddToMakeValid(\"bbbbb\")", () => {
    const result = minAddToMakeValid("bbbbb");
    expect(result).toEqual(5);
  });

  it("minAddToMakeValid(\"pwwkew\")", () => {
    const result = minAddToMakeValid("pwwkew");
    expect(result).toEqual(6);
  });

  it("minAddToMakeValid(\"\")", () => {
    const result = minAddToMakeValid("");
    expect(result).toEqual(0);
  });

  it("minAddToMakeValid(\" \")", () => {
    const result = minAddToMakeValid(" ");
    expect(result).toEqual(1);
  });

  it("minAddToMakeValid(\"a\")", () => {
    const result = minAddToMakeValid("a");
    expect(result).toEqual(1);
  });

  it("minAddToMakeValid(\"aaaaaa\")", () => {
    const result = minAddToMakeValid("aaaaaa");
    expect(result).toEqual(6);
  });
});
