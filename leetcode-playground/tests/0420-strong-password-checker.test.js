import { strongPasswordChecker } from '../0420-strong-password-checker.js';

describe('0420-strong-password-checker', () => {
  it("strongPasswordChecker(\"abcabcbb\")", () => {
    const result = strongPasswordChecker("abcabcbb");
    expect(result).toEqual(2);
  });

  it("strongPasswordChecker(\"bbbbb\")", () => {
    const result = strongPasswordChecker("bbbbb");
    expect(result).toEqual(2);
  });

  it("strongPasswordChecker(\"pwwkew\")", () => {
    const result = strongPasswordChecker("pwwkew");
    expect(result).toEqual(2);
  });

  it("strongPasswordChecker(\"\")", () => {
    const result = strongPasswordChecker("");
    expect(result).toEqual(6);
  });

  it("strongPasswordChecker(\" \")", () => {
    const result = strongPasswordChecker(" ");
    expect(result).toEqual(5);
  });

  it("strongPasswordChecker(\"a\")", () => {
    const result = strongPasswordChecker("a");
    expect(result).toEqual(5);
  });

  it("strongPasswordChecker(\"aaaaaa\")", () => {
    const result = strongPasswordChecker("aaaaaa");
    expect(result).toEqual(2);
  });
});
