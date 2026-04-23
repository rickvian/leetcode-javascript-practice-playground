import { maxDistance } from '../1162-as-far-from-land-as-possible.js';

describe('1162-as-far-from-land-as-possible', () => {
  it("maxDistance([[1, 2], [3, 4]])", () => {
    const result = maxDistance([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("maxDistance([[1]])", () => {
    const result = maxDistance([[1]]);
    expect(result).toEqual(-1);
  });

  it("maxDistance([[]])", () => {
    const result = maxDistance([[]]);
    expect(result).toEqual(-1);
  });

  it("maxDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
