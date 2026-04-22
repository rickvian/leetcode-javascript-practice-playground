import { findOrder } from '../0210-course-schedule-ii.js';

describe('0210-course-schedule-ii', () => {
  it("findOrder(2, [[1, 0]])", () => {
    const result = findOrder(2, [[1, 0]]);
    expect(result).toEqual([0, 1]);
  });

  it("findOrder(2, [[1, 0], [0, 1]])", () => {
    const result = findOrder(2, [[1, 0], [0, 1]]);
    expect(result).toEqual([]);
  });

  it("findOrder(3, [[1, 0], [2, 1]])", () => {
    const result = findOrder(3, [[1, 0], [2, 1]]);
    expect(result).toEqual([0, 1, 2]);
  });

  it("findOrder(1, [])", () => {
    const result = findOrder(1, []);
    expect(result).toEqual([0]);
  });

  it("findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])", () => {
    const result = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(result).toEqual([0, 2, 1, 3]);
  });
});
