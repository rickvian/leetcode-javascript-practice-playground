import { countOfAtoms } from '../0726-number-of-atoms.js';

describe('0726-number-of-atoms', () => {
  it("countOfAtoms(\"abcabcbb\")", () => {
    const result = countOfAtoms("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("countOfAtoms(\"bbbbb\")", () => {
    const result = countOfAtoms("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("countOfAtoms(\"pwwkew\")", () => {
    const result = countOfAtoms("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("countOfAtoms(\"\")", () => {
    const result = countOfAtoms("");
    expect(result).toEqual("");
  });

  it("countOfAtoms(\" \")", () => {
    const result = countOfAtoms(" ");
    expect(result).toEqual(" ");
  });

  it("countOfAtoms(\"a\")", () => {
    const result = countOfAtoms("a");
    expect(result).toEqual("a");
  });

  it("countOfAtoms(\"aaaaaa\")", () => {
    const result = countOfAtoms("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
