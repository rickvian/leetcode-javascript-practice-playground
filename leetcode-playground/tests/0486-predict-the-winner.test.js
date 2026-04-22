import { predictTheWinner } from '../0486-predict-the-winner.js';

describe('0486-predict-the-winner', () => {
  it("predictTheWinner([1, 2, 3, 4, 5])", () => {
    const result = predictTheWinner([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("predictTheWinner([])", () => {
    const result = predictTheWinner([]);
    expect(result).toEqual(false);
  });

  it("predictTheWinner([1])", () => {
    const result = predictTheWinner([1]);
    expect(result).toEqual(true);
  });

  it("predictTheWinner([1, 1])", () => {
    const result = predictTheWinner([1, 1]);
    expect(result).toEqual(true);
  });

  it("predictTheWinner([3, 1, 4, 1, 5])", () => {
    const result = predictTheWinner([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("predictTheWinner([-1, 0, 1])", () => {
    const result = predictTheWinner([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
