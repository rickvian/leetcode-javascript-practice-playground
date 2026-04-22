import { minWindow } from '../0727-minimum-window-subsequence.js';

describe('0727-minimum-window-subsequence', () => {
  it("minWindow(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = minWindow("ADOBECODEBANC", "ABC");
    expect(result).toEqual("ADOBEC");
  });

  it("minWindow(\"a\", \"a\")", () => {
    const result = minWindow("a", "a");
    expect(result).toEqual("a");
  });

  it("minWindow(\"a\", \"aa\")", () => {
    const result = minWindow("a", "aa");
    expect(result).toEqual("");
  });

  it("minWindow(\"\", \"A\")", () => {
    const result = minWindow("", "A");
    expect(result).toEqual("");
  });
});
