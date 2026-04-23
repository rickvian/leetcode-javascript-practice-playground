import { deckRevealedIncreasing } from '../0950-reveal-cards-in-increasing-order.js';

describe('0950-reveal-cards-in-increasing-order', () => {
  it("deckRevealedIncreasing([1, 2, 3, 4, 5])", () => {
    const result = deckRevealedIncreasing([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 5, 2, 4, 3]);
  });

  it("deckRevealedIncreasing([])", () => {
    const result = deckRevealedIncreasing([]);
    expect(result).toEqual([]);
  });

  it("deckRevealedIncreasing([1])", () => {
    const result = deckRevealedIncreasing([1]);
    expect(result).toEqual([1]);
  });

  it("deckRevealedIncreasing([1, 1])", () => {
    const result = deckRevealedIncreasing([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("deckRevealedIncreasing([3, 1, 4, 1, 5])", () => {
    const result = deckRevealedIncreasing([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 5, 1, 4, 3]);
  });

  it("deckRevealedIncreasing([-1, 0, 1])", () => {
    const result = deckRevealedIncreasing([-1, 0, 1]);
    expect(result).toEqual([-1, 1, 0]);
  });
});
