import { getPermutation } from '../0060-permutation-sequence.js';

describe('0060-permutation-sequence', () => {
  it("getPermutation(1, 1)", () => {
    const result = getPermutation(1, 1);
    expect(result).toEqual("1");
  });

  it("getPermutation(0, 0)", () => {
    const result = getPermutation(0, 0);
    expect(result).toEqual("");
  });

  it("getPermutation(3, 7)", () => {
    const result = getPermutation(3, 7);
    expect(result).toEqual("undefined12");
  });

  it("getPermutation(100, 1000)", () => {
    const result = getPermutation(100, 1000);
    expect(result).toEqual("123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293959796999810094");
  });
});
