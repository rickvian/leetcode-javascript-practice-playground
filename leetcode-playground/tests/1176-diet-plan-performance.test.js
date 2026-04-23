import { dietPlanPerformance } from '../1176-diet-plan-performance.js';

describe('1176-diet-plan-performance', () => {
  it("dietPlanPerformance([1, 2, 3])", () => {
    const result = dietPlanPerformance([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("dietPlanPerformance([])", () => {
    const result = dietPlanPerformance([]);
    expect(result).toEqual(0);
  });

  it("dietPlanPerformance([0])", () => {
    const result = dietPlanPerformance([0]);
    expect(result).toEqual(0);
  });

  it("dietPlanPerformance([-1, 0, 1])", () => {
    const result = dietPlanPerformance([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
