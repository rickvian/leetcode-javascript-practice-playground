import { maxScore } from '../1423-maximum-points-you-can-obtain-from-cards.js';

describe('1423-maximum-points-you-can-obtain-from-cards', () => {
  it("maxScore([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxScore([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("maxScore([0, 4, 3, 0], 0)", () => {
    const result = maxScore([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
