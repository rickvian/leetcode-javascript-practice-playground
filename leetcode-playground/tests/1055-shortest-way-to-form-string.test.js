import { shortestWay } from '../1055-shortest-way-to-form-string.js';

describe('1055-shortest-way-to-form-string', () => {
  it("shortestWay(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = shortestWay("ADOBECODEBANC", "ABC");
    expect(result).toEqual(1);
  });

  it("shortestWay(\"a\", \"a\")", () => {
    const result = shortestWay("a", "a");
    expect(result).toEqual(1);
  });

  it("shortestWay(\"a\", \"aa\")", () => {
    const result = shortestWay("a", "aa");
    expect(result).toEqual(2);
  });

  it("shortestWay(\"\", \"A\")", () => {
    const result = shortestWay("", "A");
    expect(result).toEqual(-1);
  });
});
