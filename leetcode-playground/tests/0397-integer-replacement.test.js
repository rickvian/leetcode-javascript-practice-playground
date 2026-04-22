import { integerReplacement } from '../0397-integer-replacement.js';

describe('0397-integer-replacement', () => {
  it("integerReplacement(1, 1)", () => {
    const result = integerReplacement(1, 1);
    expect(result).toEqual(1);
  });

  it("integerReplacement(3, 7)", () => {
    const result = integerReplacement(3, 7);
    expect(result).toEqual(9);
  });

  it("integerReplacement(100, 1000)", () => {
    const result = integerReplacement(100, 1000);
    expect(result).toEqual(1008);
  });
});
