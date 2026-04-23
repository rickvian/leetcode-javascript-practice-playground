import { bagOfTokensScore } from '../0948-bag-of-tokens.js';

describe('0948-bag-of-tokens', () => {
  it("bagOfTokensScore([2, 7, 11, 15], 9)", () => {
    const result = bagOfTokensScore([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("bagOfTokensScore([3, 2, 4], 6)", () => {
    const result = bagOfTokensScore([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("bagOfTokensScore([3, 3], 6)", () => {
    const result = bagOfTokensScore([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("bagOfTokensScore([-1, -2, -3, -4, -5], -8)", () => {
    const result = bagOfTokensScore([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("bagOfTokensScore([1, 2], 3)", () => {
    const result = bagOfTokensScore([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("bagOfTokensScore([0, 4, 3, 0], 0)", () => {
    const result = bagOfTokensScore([0, 4, 3, 0], 0);
    expect(result).toEqual(2);
  });
});
