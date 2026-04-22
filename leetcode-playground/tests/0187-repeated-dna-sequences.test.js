import { findRepeatedDnaSequences } from '../0187-repeated-dna-sequences.js';

describe('0187-repeated-dna-sequences', () => {
  it("findRepeatedDnaSequences(\"abcabcbb\")", () => {
    const result = findRepeatedDnaSequences("abcabcbb");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\"bbbbb\")", () => {
    const result = findRepeatedDnaSequences("bbbbb");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\"pwwkew\")", () => {
    const result = findRepeatedDnaSequences("pwwkew");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\"\")", () => {
    const result = findRepeatedDnaSequences("");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\" \")", () => {
    const result = findRepeatedDnaSequences(" ");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\"a\")", () => {
    const result = findRepeatedDnaSequences("a");
    expect(result).toEqual([]);
  });

  it("findRepeatedDnaSequences(\"aaaaaa\")", () => {
    const result = findRepeatedDnaSequences("aaaaaa");
    expect(result).toEqual([]);
  });
});
