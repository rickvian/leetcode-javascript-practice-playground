import { complexNumberMultiply } from '../0537-complex-number-multiplication.js';

describe('0537-complex-number-multiplication', () => {
  it("complexNumberMultiply(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = complexNumberMultiply("ADOBECODEBANC", "ABC");
    expect(result).toEqual("NaN+NaNi");
  });

  it("complexNumberMultiply(\"a\", \"a\")", () => {
    const result = complexNumberMultiply("a", "a");
    expect(result).toEqual("NaN+NaNi");
  });

  it("complexNumberMultiply(\"a\", \"aa\")", () => {
    const result = complexNumberMultiply("a", "aa");
    expect(result).toEqual("NaN+NaNi");
  });

  it("complexNumberMultiply(\"\", \"A\")", () => {
    const result = complexNumberMultiply("", "A");
    expect(result).toEqual("NaN+NaNi");
  });
});
