import { isIsomorphic } from '../0205-isomorphic-strings.js';

describe('0205-isomorphic-strings', () => {
  it("isIsomorphic(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isIsomorphic("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isIsomorphic(\"a\", \"a\")", () => {
    const result = isIsomorphic("a", "a");
    expect(result).toEqual(true);
  });

  it("isIsomorphic(\"a\", \"aa\")", () => {
    const result = isIsomorphic("a", "aa");
    expect(result).toEqual(false);
  });

  it("isIsomorphic(\"\", \"A\")", () => {
    const result = isIsomorphic("", "A");
    expect(result).toEqual(true);
  });
});
