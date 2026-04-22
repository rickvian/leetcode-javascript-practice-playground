import { minAbbreviation } from '../0411-minimum-unique-word-abbreviation.js';

describe('0411-minimum-unique-word-abbreviation', () => {
  it("minAbbreviation(\"apple\", [\"blade\"])", () => {
    const result = minAbbreviation("apple", ["blade"]);
    expect(result).toEqual("a4");
  });

  it("minAbbreviation(\"apple\", [\"apple\"])", () => {
    const result = minAbbreviation("apple", ["apple"]);
    expect(result).toEqual("apple");
  });

  it("minAbbreviation(\"apple\", [])", () => {
    const result = minAbbreviation("apple", []);
    expect(result).toEqual("5");
  });

  it("minAbbreviation(\"a\", [\"a\"])", () => {
    const result = minAbbreviation("a", ["a"]);
    expect(result).toEqual("a");
  });

  it("minAbbreviation(\"abcdef\", [\"abcdef\", \"abcfeg\"])", () => {
    const result = minAbbreviation("abcdef", ["abcdef", "abcfeg"]);
    expect(result).toEqual("abcdef");
  });
});
