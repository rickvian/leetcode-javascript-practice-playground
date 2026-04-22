import { change } from '../0518-coin-change-ii.js';

describe('0518-coin-change-ii', () => {
  it("change(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = change(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(2);
  });

  it("change(2, [2, 1])", () => {
    const result = change(2, [2, 1]);
    expect(result).toEqual(2);
  });

  it("change(0, [3, 2, 6])", () => {
    const result = change(0, [3, 2, 6]);
    expect(result).toEqual(1);
  });

  it("change(1, [1, 2, 3])", () => {
    const result = change(1, [1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("change(3, [1, 2, 3, 4, 5])", () => {
    const result = change(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("change(1, [7, 6, 4, 3, 1])", () => {
    const result = change(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(1);
  });
});
