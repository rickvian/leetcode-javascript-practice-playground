import { canConstruct } from '../0383-ransom-note.js';

describe('0383-ransom-note', () => {
  it("canConstruct(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = canConstruct("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("canConstruct(\"a\", \"a\")", () => {
    const result = canConstruct("a", "a");
    expect(result).toEqual(true);
  });

  it("canConstruct(\"a\", \"aa\")", () => {
    const result = canConstruct("a", "aa");
    expect(result).toEqual(true);
  });

  it("canConstruct(\"\", \"A\")", () => {
    const result = canConstruct("", "A");
    expect(result).toEqual(true);
  });
});
