import { minNumberOfFrogs } from '../1419-minimum-number-of-frogs-croaking.js';

describe('1419-minimum-number-of-frogs-croaking', () => {
  it("minNumberOfFrogs(\"abcabcbb\")", () => {
    const result = minNumberOfFrogs("abcabcbb");
    expect(result).toEqual(-1);
  });

  it("minNumberOfFrogs(\"bbbbb\")", () => {
    const result = minNumberOfFrogs("bbbbb");
    expect(result).toEqual(-1);
  });

  it("minNumberOfFrogs(\"pwwkew\")", () => {
    const result = minNumberOfFrogs("pwwkew");
    expect(result).toEqual(-1);
  });

  it("minNumberOfFrogs(\"\")", () => {
    const result = minNumberOfFrogs("");
    expect(result).toEqual(0);
  });

  it("minNumberOfFrogs(\" \")", () => {
    const result = minNumberOfFrogs(" ");
    expect(result).toEqual(-1);
  });

  it("minNumberOfFrogs(\"a\")", () => {
    const result = minNumberOfFrogs("a");
    expect(result).toEqual(-1);
  });

  it("minNumberOfFrogs(\"aaaaaa\")", () => {
    const result = minNumberOfFrogs("aaaaaa");
    expect(result).toEqual(-1);
  });
});
