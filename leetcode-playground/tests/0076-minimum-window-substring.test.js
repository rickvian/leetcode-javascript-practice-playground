import { minWindow } from '../0076-minimum-window-substring.js';

describe('0076-minimum-window-substring', () => {
  it("minWindow(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = minWindow("ADOBECODEBANC", "ABC");
    expect(result).toEqual("BANC");
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
