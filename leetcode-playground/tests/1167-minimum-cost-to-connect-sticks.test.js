import { connectSticks } from '../1167-minimum-cost-to-connect-sticks.js';

describe('1167-minimum-cost-to-connect-sticks', () => {
  it("connectSticks([1, 2, 3, 4, 5])", () => {
    const result = connectSticks([1, 2, 3, 4, 5]);
    expect(result).toEqual(33);
  });

  it("connectSticks([])", () => {
    const result = connectSticks([]);
    expect(result).toEqual(0);
  });

  it("connectSticks([1])", () => {
    const result = connectSticks([1]);
    expect(result).toEqual(0);
  });

  it("connectSticks([1, 1])", () => {
    const result = connectSticks([1, 1]);
    expect(result).toEqual(2);
  });

  it("connectSticks([3, 1, 4, 1, 5])", () => {
    const result = connectSticks([3, 1, 4, 1, 5]);
    expect(result).toEqual(30);
  });

  it("connectSticks([-1, 0, 1])", () => {
    const result = connectSticks([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
