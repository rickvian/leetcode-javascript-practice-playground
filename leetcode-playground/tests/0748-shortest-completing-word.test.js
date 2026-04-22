import { shortestCompletingWord } from '../0748-shortest-completing-word.js';

describe('0748-shortest-completing-word', () => {
  it("shortestCompletingWord(\"1s3 PSt\", [\"step\", \"steps\", \"stripe\", \"stepple\"])", () => {
    const result = shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
    expect(result).toEqual("steps");
  });

  it("shortestCompletingWord(\"1s3 456\", [\"looks\", \"pest\", \"stew\", \"show\"])", () => {
    const result = shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]);
    expect(result).toEqual("pest");
  });

  it("shortestCompletingWord(\"Ah71752\", [\"suggest\", \"letter\", \"of\", \"husband\", \"easy\", \"education\"])", () => {
    const result = shortestCompletingWord("Ah71752", ["suggest", "letter", "of", "husband", "easy", "education"]);
    expect(result).toEqual("husband");
  });

  it("shortestCompletingWord(\"OgEu755\", [\"enough\", \"these\", \"play\", \"wide\", \"wonder\", \"box\"])", () => {
    const result = shortestCompletingWord("OgEu755", ["enough", "these", "play", "wide", "wonder", "box"]);
    expect(result).toEqual("enough");
  });

  it("shortestCompletingWord(\"a\", [\"apple\", \"b\", \"aa\"])", () => {
    const result = shortestCompletingWord("a", ["apple", "b", "aa"]);
    expect(result).toEqual("aa");
  });
});
