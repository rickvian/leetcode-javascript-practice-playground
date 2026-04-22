import { reachingPoints } from '../0780-reaching-points.js';

describe('0780-reaching-points', () => {
  it("reachingPoints([1, 2, 3])", () => {
    const result = reachingPoints([1, 2, 3]);
    expect(result).toEqual(false);
  });

  it("reachingPoints([])", () => {
    const result = reachingPoints([]);
    expect(result).toEqual(false);
  });

  it("reachingPoints([0])", () => {
    const result = reachingPoints([0]);
    expect(result).toEqual(false);
  });

  it("reachingPoints([-1, 0, 1])", () => {
    const result = reachingPoints([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
