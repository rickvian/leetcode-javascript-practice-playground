import { minDifficulty } from '../1335-minimum-difficulty-of-a-job-schedule.js';

describe('1335-minimum-difficulty-of-a-job-schedule', () => {
  it("minDifficulty([2, 7, 11, 15], 9)", () => {
    const result = minDifficulty([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("minDifficulty([3, 2, 4], 6)", () => {
    const result = minDifficulty([3, 2, 4], 6);
    expect(result).toEqual(-1);
  });

  it("minDifficulty([3, 3], 6)", () => {
    const result = minDifficulty([3, 3], 6);
    expect(result).toEqual(-1);
  });

  it("minDifficulty([1, 2], 3)", () => {
    const result = minDifficulty([1, 2], 3);
    expect(result).toEqual(-1);
  });

  it("minDifficulty([0, 4, 3, 0], 0)", () => {
    const result = minDifficulty([0, 4, 3, 0], 0);
    expect(result).toEqual(-1);
  });
});
