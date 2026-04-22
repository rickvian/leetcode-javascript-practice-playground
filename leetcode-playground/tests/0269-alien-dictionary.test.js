import { alienOrder } from '../0269-alien-dictionary.js';

describe('0269-alien-dictionary', () => {
  it("alienOrder([\"flower\", \"flow\", \"flight\"])", () => {
    const result = alienOrder(["flower", "flow", "flight"]);
    expect(result).toEqual("");
  });

  it("alienOrder([\"a\", \"b\", \"c\"])", () => {
    const result = alienOrder(["a", "b", "c"]);
    expect(result).toEqual("abc");
  });

  it("alienOrder([])", () => {
    const result = alienOrder([]);
    expect(result).toEqual("");
  });

  it("alienOrder([\"\"])", () => {
    const result = alienOrder([""]);
    expect(result).toEqual("");
  });

  it("alienOrder([\"ab\", \"a\", \"abc\"])", () => {
    const result = alienOrder(["ab", "a", "abc"]);
    expect(result).toEqual("");
  });
});
