import { circularArrayLoop } from '../0457-circular-array-loop.js';

describe('0457-circular-array-loop', () => {
  it("circularArrayLoop([1, 2, 3, 4, 5])", () => {
    const result = circularArrayLoop([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("circularArrayLoop([])", () => {
    const result = circularArrayLoop([]);
    expect(result).toEqual(false);
  });

  it("circularArrayLoop([1])", () => {
    const result = circularArrayLoop([1]);
    expect(result).toEqual(false);
  });

  it("circularArrayLoop([1, 1])", () => {
    const result = circularArrayLoop([1, 1]);
    expect(result).toEqual(true);
  });

  it("circularArrayLoop([3, 1, 4, 1, 5])", () => {
    const result = circularArrayLoop([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("circularArrayLoop([-1, 0, 1])", () => {
    const result = circularArrayLoop([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
