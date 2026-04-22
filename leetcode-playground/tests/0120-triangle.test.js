import { minimumTotal } from '../0120-triangle.js';

describe('0120-triangle', () => {
  it("minimumTotal([[1, 2], [3, 4]])", () => {
    const result = minimumTotal([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("minimumTotal([[1]])", () => {
    const result = minimumTotal([[1]]);
    expect(result).toEqual(1);
  });

  it("minimumTotal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minimumTotal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(12);
  });
});
