import { longestCommonPrefix } from '../0014-longest-common-prefix.js';

describe('0014-longest-common-prefix', () => {
  it("longestCommonPrefix([\"flower\", \"flow\", \"flight\"])", () => {
    const result = longestCommonPrefix(["flower", "flow", "flight"]);
    expect(result).toEqual("fl");
  });

  it("longestCommonPrefix([\"dog\", \"racecar\", \"car\"])", () => {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);
    expect(result).toEqual("");
  });

  it("longestCommonPrefix([\"a\"])", () => {
    const result = longestCommonPrefix(["a"]);
    expect(result).toEqual("a");
  });

  it("longestCommonPrefix([\"\"])", () => {
    const result = longestCommonPrefix([""]);
    expect(result).toEqual("");
  });

  it("longestCommonPrefix([\"ab\", \"a\"])", () => {
    const result = longestCommonPrefix(["ab", "a"]);
    expect(result).toEqual("a");
  });
});
