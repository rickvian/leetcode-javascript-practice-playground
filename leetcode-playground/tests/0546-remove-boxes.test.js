import { removeBoxes } from '../0546-remove-boxes.js';

describe('0546-remove-boxes', () => {
  it("removeBoxes([1, 2, 3, 4, 5])", () => {
    const result = removeBoxes([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("removeBoxes([])", () => {
    const result = removeBoxes([]);
    expect(result).toEqual(0);
  });

  it("removeBoxes([1])", () => {
    const result = removeBoxes([1]);
    expect(result).toEqual(1);
  });

  it("removeBoxes([1, 1])", () => {
    const result = removeBoxes([1, 1]);
    expect(result).toEqual(4);
  });

  it("removeBoxes([3, 1, 4, 1, 5])", () => {
    const result = removeBoxes([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("removeBoxes([-1, 0, 1])", () => {
    const result = removeBoxes([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
