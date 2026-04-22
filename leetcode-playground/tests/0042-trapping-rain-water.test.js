import { trap } from '../0042-trapping-rain-water.js';

describe('0042-trapping-rain-water', () => {
  it("trap([1, 2, 3, 4, 5])", () => {
    const result = trap([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("trap([])", () => {
    const result = trap([]);
    expect(result).toEqual(0);
  });

  it("trap([1])", () => {
    const result = trap([1]);
    expect(result).toEqual(0);
  });

  it("trap([1, 1])", () => {
    const result = trap([1, 1]);
    expect(result).toEqual(0);
  });

  it("trap([3, 1, 4, 1, 5])", () => {
    const result = trap([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("trap([-1, 0, 1])", () => {
    const result = trap([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
