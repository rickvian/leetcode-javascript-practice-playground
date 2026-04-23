import { shortestSuperstring } from '../0943-find-the-shortest-superstring.js';

describe('0943-find-the-shortest-superstring', () => {
  it("shortestSuperstring([\"flower\", \"flow\", \"flight\"])", () => {
    const result = shortestSuperstring(["flower", "flow", "flight"]);
    expect(result).toEqual("flightflower");
  });

  it("shortestSuperstring([\"a\", \"b\", \"c\"])", () => {
    const result = shortestSuperstring(["a", "b", "c"]);
    expect(result).toEqual("cba");
  });

  it("shortestSuperstring([\"\"])", () => {
    const result = shortestSuperstring([""]);
    expect(result).toEqual("");
  });

  it("shortestSuperstring([\"ab\", \"a\", \"abc\"])", () => {
    const result = shortestSuperstring(["ab", "a", "abc"]);
    expect(result).toEqual("abc");
  });
});
