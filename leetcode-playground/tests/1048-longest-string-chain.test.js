import { longestStrChain } from '../1048-longest-string-chain.js';

describe('1048-longest-string-chain', () => {
  it("longestStrChain([\"flower\", \"flow\", \"flight\"])", () => {
    const result = longestStrChain(["flower", "flow", "flight"]);
    expect(result).toEqual(1);
  });

  it("longestStrChain([\"a\", \"b\", \"c\"])", () => {
    const result = longestStrChain(["a", "b", "c"]);
    expect(result).toEqual(1);
  });

  it("longestStrChain([])", () => {
    const result = longestStrChain([]);
    expect(result).toEqual(1);
  });

  it("longestStrChain([\"\"])", () => {
    const result = longestStrChain([""]);
    expect(result).toEqual(1);
  });

  it("longestStrChain([\"ab\", \"a\", \"abc\"])", () => {
    const result = longestStrChain(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});
