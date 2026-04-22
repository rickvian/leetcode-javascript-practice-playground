import { maxPoints } from '../0149-max-points-on-a-line.js';

describe('0149-max-points-on-a-line', () => {
  it("maxPoints([[1, 2], [3, 4]])", () => {
    const result = maxPoints([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("maxPoints([[1]])", () => {
    const result = maxPoints([[1]]);
    expect(result).toEqual(1);
  });

  it("maxPoints([[]])", () => {
    const result = maxPoints([[]]);
    expect(result).toEqual(1);
  });

  it("maxPoints([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxPoints([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
