import { minimumLengthEncoding } from '../0820-short-encoding-of-words.js';

describe('0820-short-encoding-of-words', () => {
  it("minimumLengthEncoding([\"flower\", \"flow\", \"flight\"])", () => {
    const result = minimumLengthEncoding(["flower", "flow", "flight"]);
    expect(result).toEqual(19);
  });

  it("minimumLengthEncoding([\"a\", \"b\", \"c\"])", () => {
    const result = minimumLengthEncoding(["a", "b", "c"]);
    expect(result).toEqual(6);
  });

  it("minimumLengthEncoding([])", () => {
    const result = minimumLengthEncoding([]);
    expect(result).toEqual(0);
  });

  it("minimumLengthEncoding([\"\"])", () => {
    const result = minimumLengthEncoding([""]);
    expect(result).toEqual(1);
  });

  it("minimumLengthEncoding([\"ab\", \"a\", \"abc\"])", () => {
    const result = minimumLengthEncoding(["ab", "a", "abc"]);
    expect(result).toEqual(9);
  });
});
