import { isReflected } from '../0356-line-reflection.js';

describe('0356-line-reflection', () => {
  it("isReflected([[1, 2], [3, 4]])", () => {
    const result = isReflected([[1, 2], [3, 4]]);
    expect(result).toEqual(false);
  });

  it("isReflected([[1]])", () => {
    const result = isReflected([[1]]);
    expect(result).toEqual(true);
  });

  it("isReflected([[]])", () => {
    const result = isReflected([[]]);
    expect(result).toEqual(false);
  });

  it("isReflected([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = isReflected([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
