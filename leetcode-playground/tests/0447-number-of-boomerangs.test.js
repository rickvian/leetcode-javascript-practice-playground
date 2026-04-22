import { numberOfBoomerangs } from '../0447-number-of-boomerangs.js';

describe('0447-number-of-boomerangs', () => {
  it("numberOfBoomerangs([[1, 2], [3, 4]])", () => {
    const result = numberOfBoomerangs([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("numberOfBoomerangs([[1]])", () => {
    const result = numberOfBoomerangs([[1]]);
    expect(result).toEqual(0);
  });

  it("numberOfBoomerangs([[]])", () => {
    const result = numberOfBoomerangs([[]]);
    expect(result).toEqual(0);
  });

  it("numberOfBoomerangs([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numberOfBoomerangs([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(2);
  });
});
