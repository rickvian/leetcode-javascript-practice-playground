import { uniqueMorseRepresentations } from '../0804-unique-morse-code-words.js';

describe('0804-unique-morse-code-words', () => {
  it("uniqueMorseRepresentations([\"flower\", \"flow\", \"flight\"])", () => {
    const result = uniqueMorseRepresentations(["flower", "flow", "flight"]);
    expect(result).toEqual(3);
  });

  it("uniqueMorseRepresentations([\"a\", \"b\", \"c\"])", () => {
    const result = uniqueMorseRepresentations(["a", "b", "c"]);
    expect(result).toEqual(3);
  });

  it("uniqueMorseRepresentations([])", () => {
    const result = uniqueMorseRepresentations([]);
    expect(result).toEqual(0);
  });

  it("uniqueMorseRepresentations([\"\"])", () => {
    const result = uniqueMorseRepresentations([""]);
    expect(result).toEqual(1);
  });

  it("uniqueMorseRepresentations([\"ab\", \"a\", \"abc\"])", () => {
    const result = uniqueMorseRepresentations(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});
