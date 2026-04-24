import { maxPerformance } from '../1383-maximum-performance-of-a-team.js';

describe('1383-maximum-performance-of-a-team', () => {
  it("maxPerformance([1, 2, 3])", () => {
    const result = maxPerformance([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maxPerformance([])", () => {
    const result = maxPerformance([]);
    expect(result).toEqual(0);
  });

  it("maxPerformance([0])", () => {
    const result = maxPerformance([0]);
    expect(result).toEqual(0);
  });

  it("maxPerformance([-1, 0, 1])", () => {
    const result = maxPerformance([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
