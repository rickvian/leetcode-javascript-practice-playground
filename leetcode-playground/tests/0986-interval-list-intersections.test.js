import { intervalIntersection } from '../0986-interval-list-intersections.js';

describe('0986-interval-list-intersections', () => {
  it("intervalIntersection([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = intervalIntersection([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual([]);
  });

  it("intervalIntersection([[1, 2], [3, 4]], 5)", () => {
    const result = intervalIntersection([[1, 2], [3, 4]], 5);
    expect(result).toEqual([]);
  });

  it("intervalIntersection([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = intervalIntersection([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual([]);
  });
});
