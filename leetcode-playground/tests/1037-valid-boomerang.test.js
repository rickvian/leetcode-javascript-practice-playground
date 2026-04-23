import { isBoomerang } from '../1037-valid-boomerang.js';

describe('1037-valid-boomerang', () => {
  it("isBoomerang([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = isBoomerang([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
