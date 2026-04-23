import { minScoreTriangulation } from '../1039-minimum-score-triangulation-of-polygon.js';

describe('1039-minimum-score-triangulation-of-polygon', () => {
  it("minScoreTriangulation([1, 2, 3, 4, 5])", () => {
    const result = minScoreTriangulation([1, 2, 3, 4, 5]);
    expect(result).toEqual(38);
  });

  it("minScoreTriangulation([1])", () => {
    const result = minScoreTriangulation([1]);
    expect(result).toEqual(0);
  });

  it("minScoreTriangulation([1, 1])", () => {
    const result = minScoreTriangulation([1, 1]);
    expect(result).toEqual(0);
  });

  it("minScoreTriangulation([3, 1, 4, 1, 5])", () => {
    const result = minScoreTriangulation([3, 1, 4, 1, 5]);
    expect(result).toEqual(22);
  });

  it("minScoreTriangulation([-1, 0, 1])", () => {
    const result = minScoreTriangulation([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
