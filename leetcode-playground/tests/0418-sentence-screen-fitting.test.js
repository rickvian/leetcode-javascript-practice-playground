import { wordsTyping } from '../0418-sentence-screen-fitting.js';

describe('0418-sentence-screen-fitting', () => {
  it("wordsTyping([1, 2, 3])", () => {
    const result = wordsTyping([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("wordsTyping([])", () => {
    const result = wordsTyping([]);
    expect(result).toEqual(0);
  });

  it("wordsTyping([0])", () => {
    const result = wordsTyping([0]);
    expect(result).toEqual(0);
  });

  it("wordsTyping([-1, 0, 1])", () => {
    const result = wordsTyping([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
