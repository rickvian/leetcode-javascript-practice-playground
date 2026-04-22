import { getHint } from '../0299-bulls-and-cows.js';

describe('0299-bulls-and-cows', () => {
  it("getHint(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = getHint("ADOBECODEBANC", "ABC");
    expect(result).toEqual("1A0B");
  });

  it("getHint(\"a\", \"a\")", () => {
    const result = getHint("a", "a");
    expect(result).toEqual("1A0B");
  });

  it("getHint(\"a\", \"aa\")", () => {
    const result = getHint("a", "aa");
    expect(result).toEqual("1A0B");
  });

  it("getHint(\"\", \"A\")", () => {
    const result = getHint("", "A");
    expect(result).toEqual("0A0B");
  });
});
