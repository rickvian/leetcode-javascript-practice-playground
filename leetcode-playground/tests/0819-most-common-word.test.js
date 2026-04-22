import { mostCommonWord } from '../0819-most-common-word.js';

describe('0819-most-common-word', () => {
  it("mostCommonWord(\"Bob hit a ball, the hit BALL flew far after it was hit.\", [\"hit\"])", () => {
    const result = mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);
    expect(result).toEqual("ball");
  });

  it("mostCommonWord(\"a.\", [])", () => {
    const result = mostCommonWord("a.", []);
    expect(result).toEqual("a");
  });

  it("mostCommonWord(\"Bob. hIt, baLl\", [\"bob\", \"hit\"])", () => {
    const result = mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
    expect(result).toEqual("ball");
  });

  it("mostCommonWord(\"a a a b b c c\", [\"a\"])", () => {
    const result = mostCommonWord("a a a b b c c", ["a"]);
    expect(result).toEqual("b");
  });

  it("mostCommonWord(\"Hello HELLO hello\", [])", () => {
    const result = mostCommonWord("Hello HELLO hello", []);
    expect(result).toEqual("hello");
  });

  it("mostCommonWord(\"the quick brown fox\", [\"the\"])", () => {
    const result = mostCommonWord("the quick brown fox", ["the"]);
    expect(result).toEqual("quick");
  });
});
