import { maxNumberOfFamilies } from '../1386-cinema-seat-allocation.js';

describe('1386-cinema-seat-allocation', () => {
  it("maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]])", () => {
    const result = maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]);
    expect(result).toEqual(4);
  });

  it("maxNumberOfFamilies(2, [[2, 1], [1, 8], [2, 6]])", () => {
    const result = maxNumberOfFamilies(2, [[2, 1], [1, 8], [2, 6]]);
    expect(result).toEqual(2);
  });

  it("maxNumberOfFamilies(4, [])", () => {
    const result = maxNumberOfFamilies(4, []);
    expect(result).toEqual(8);
  });

  it("maxNumberOfFamilies(1, [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9]])", () => {
    const result = maxNumberOfFamilies(1, [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9]]);
    expect(result).toEqual(0);
  });

  it("maxNumberOfFamilies(5, [[1, 3], [2, 6], [3, 9]])", () => {
    const result = maxNumberOfFamilies(5, [[1, 3], [2, 6], [3, 9]]);
    expect(result).toEqual(7);
  });

  it("maxNumberOfFamilies(1, [[1, 1], [1, 10]])", () => {
    const result = maxNumberOfFamilies(1, [[1, 1], [1, 10]]);
    expect(result).toEqual(2);
  });
});
