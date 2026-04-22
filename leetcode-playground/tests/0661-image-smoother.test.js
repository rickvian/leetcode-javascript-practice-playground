import { imageSmoother } from '../0661-image-smoother.js';

describe('0661-image-smoother', () => {
  it("imageSmoother([[1, 2], [3, 4]])", () => {
    const result = imageSmoother([[1, 2], [3, 4]]);
    expect(result).toEqual([[2, 2], [2, 2]]);
  });

  it("imageSmoother([[1]])", () => {
    const result = imageSmoother([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("imageSmoother([[]])", () => {
    const result = imageSmoother([[]]);
    expect(result).toEqual([[]]);
  });

  it("imageSmoother([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = imageSmoother([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[3, 3, 4], [4, 5, 5], [6, 6, 7]]);
  });
});
