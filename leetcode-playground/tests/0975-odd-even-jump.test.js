import { oddEvenJumps } from '../0975-odd-even-jump.js';

describe('0975-odd-even-jump', () => {
  it("oddEvenJumps([1, 2, 3, 4, 5])", () => {
    const result = oddEvenJumps([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("oddEvenJumps([])", () => {
    const result = oddEvenJumps([]);
    expect(result).toEqual(1);
  });

  it("oddEvenJumps([1])", () => {
    const result = oddEvenJumps([1]);
    expect(result).toEqual(1);
  });

  it("oddEvenJumps([1, 1])", () => {
    const result = oddEvenJumps([1, 1]);
    expect(result).toEqual(2);
  });

  it("oddEvenJumps([3, 1, 4, 1, 5])", () => {
    const result = oddEvenJumps([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("oddEvenJumps([-1, 0, 1])", () => {
    const result = oddEvenJumps([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
