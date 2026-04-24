import { checkIfCanBreak } from '../1433-check-if-a-string-can-break-another-string.js';

describe('1433-check-if-a-string-can-break-another-string', () => {
  it("checkIfCanBreak(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = checkIfCanBreak("ADOBECODEBANC", "ABC");
    expect(result).toEqual(true);
  });

  it("checkIfCanBreak(\"a\", \"a\")", () => {
    const result = checkIfCanBreak("a", "a");
    expect(result).toEqual(true);
  });

  it("checkIfCanBreak(\"a\", \"aa\")", () => {
    const result = checkIfCanBreak("a", "aa");
    expect(result).toEqual(true);
  });

  it("checkIfCanBreak(\"\", \"A\")", () => {
    const result = checkIfCanBreak("", "A");
    expect(result).toEqual(true);
  });
});
