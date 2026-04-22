import { numPermsDISequence } from '../0903-valid-permutations-for-di-sequence.js';

describe('0903-valid-permutations-for-di-sequence', () => {
  it("numPermsDISequence(\"abcabcbb\")", () => {
    const result = numPermsDISequence("abcabcbb");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\"bbbbb\")", () => {
    const result = numPermsDISequence("bbbbb");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\"pwwkew\")", () => {
    const result = numPermsDISequence("pwwkew");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\"\")", () => {
    const result = numPermsDISequence("");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\" \")", () => {
    const result = numPermsDISequence(" ");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\"a\")", () => {
    const result = numPermsDISequence("a");
    expect(result).toEqual(1);
  });

  it("numPermsDISequence(\"aaaaaa\")", () => {
    const result = numPermsDISequence("aaaaaa");
    expect(result).toEqual(1);
  });
});
