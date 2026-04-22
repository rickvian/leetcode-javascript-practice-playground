import { canFinish } from '../0207-course-schedule.js';

describe('0207-course-schedule', () => {
  it("canFinish(2, [[1, 0]])", () => {
    const result = canFinish(2, [[1, 0]]);
    expect(result).toEqual(true);
  });

  it("canFinish(2, [[1, 0], [0, 1]])", () => {
    const result = canFinish(2, [[1, 0], [0, 1]]);
    expect(result).toEqual(false);
  });

  it("canFinish(3, [[1, 0], [2, 1]])", () => {
    const result = canFinish(3, [[1, 0], [2, 1]]);
    expect(result).toEqual(true);
  });

  it("canFinish(1, [])", () => {
    const result = canFinish(1, []);
    expect(result).toEqual(true);
  });

  it("canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])", () => {
    const result = canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(result).toEqual(true);
  });
});
