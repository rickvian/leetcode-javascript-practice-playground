import { findCircleNum } from '../0547-number-of-provinces.js';

describe('0547-number-of-provinces', () => {
  it("findCircleNum([[1, 2], [3, 4]])", () => {
    const result = findCircleNum([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("findCircleNum([[1]])", () => {
    const result = findCircleNum([[1]]);
    expect(result).toEqual(1);
  });

  it("findCircleNum([[]])", () => {
    const result = findCircleNum([[]]);
    expect(result).toEqual(1);
  });

  it("findCircleNum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findCircleNum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
