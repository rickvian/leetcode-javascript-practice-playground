import { twoCitySchedCost } from '../1029-two-city-scheduling.js';

describe('1029-two-city-scheduling', () => {
  it("twoCitySchedCost([[1, 2], [3, 4]])", () => {
    const result = twoCitySchedCost([[1, 2], [3, 4]]);
    expect(result).toEqual(5);
  });

  it("twoCitySchedCost([[1]])", () => {
    const result = twoCitySchedCost([[1]]);
    expect(result).toEqual(1);
  });

  it("twoCitySchedCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = twoCitySchedCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(13);
  });
});
