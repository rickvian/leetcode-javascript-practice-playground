import { maxProduct } from '../0318-maximum-product-of-word-lengths.js';

describe('0318-maximum-product-of-word-lengths', () => {
  it("maxProduct([\"flower\", \"flow\", \"flight\"])", () => {
    const result = maxProduct(["flower", "flow", "flight"]);
    expect(result).toEqual(0);
  });

  it("maxProduct([\"a\", \"b\", \"c\"])", () => {
    const result = maxProduct(["a", "b", "c"]);
    expect(result).toEqual(1);
  });

  it("maxProduct([])", () => {
    const result = maxProduct([]);
    expect(result).toEqual(0);
  });

  it("maxProduct([\"\"])", () => {
    const result = maxProduct([""]);
    expect(result).toEqual(0);
  });

  it("maxProduct([\"ab\", \"a\", \"abc\"])", () => {
    const result = maxProduct(["ab", "a", "abc"]);
    expect(result).toEqual(0);
  });
});
