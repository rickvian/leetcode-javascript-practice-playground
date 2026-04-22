import { numberToWords } from '../0273-integer-to-english-words.js';

describe('0273-integer-to-english-words', () => {
  it("numberToWords(121)", () => {
    const result = numberToWords(121);
    expect(result).toEqual("One Hundred Twenty One");
  });

  it("numberToWords(10)", () => {
    const result = numberToWords(10);
    expect(result).toEqual("Ten");
  });

  it("numberToWords(0)", () => {
    const result = numberToWords(0);
    expect(result).toEqual("Zero");
  });

  it("numberToWords(1534236469)", () => {
    const result = numberToWords(1534236469);
    expect(result).toEqual("One Billion Five Hundred Thirty Four Million Two Hundred Thirty Six Thousand Four Hundred Sixty Nine");
  });
});
