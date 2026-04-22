import { NumMatrix } from '../0308-range-sum-query-2d-mutable.js';

describe('0308-range-sum-query-2d-mutable', () => {
  it("sequence 1", () => {
    const obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
    expect(obj.sumRegion(2, 1, 4, 3)).toEqual(8);
    obj.update(3, 2, 2);
    expect(obj.sumRegion(2, 1, 4, 3)).toEqual(10);
  });
});
