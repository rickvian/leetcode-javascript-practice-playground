import { numSimilarGroups } from '../0839-similar-string-groups.js';

describe('0839-similar-string-groups', () => {
  it("numSimilarGroups([\"flower\", \"flow\", \"flight\"])", () => {
    const result = numSimilarGroups(["flower", "flow", "flight"]);
    expect(result).toEqual(1);
  });

  it("numSimilarGroups([\"a\", \"b\", \"c\"])", () => {
    const result = numSimilarGroups(["a", "b", "c"]);
    expect(result).toEqual(3);
  });

  it("numSimilarGroups([])", () => {
    const result = numSimilarGroups([]);
    expect(result).toEqual(0);
  });

  it("numSimilarGroups([\"\"])", () => {
    const result = numSimilarGroups([""]);
    expect(result).toEqual(1);
  });

  it("numSimilarGroups([\"ab\", \"a\", \"abc\"])", () => {
    const result = numSimilarGroups(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});
