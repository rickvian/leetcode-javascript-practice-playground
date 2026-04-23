import { checkStraightLine } from '../1232-check-if-it-is-a-straight-line.js';

describe('1232-check-if-it-is-a-straight-line', () => {
  it("checkStraightLine([[1, 2], [3, 4]])", () => {
    const result = checkStraightLine([[1, 2], [3, 4]]);
    expect(result).toEqual(true);
  });

  it("checkStraightLine([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = checkStraightLine([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(true);
  });
});
