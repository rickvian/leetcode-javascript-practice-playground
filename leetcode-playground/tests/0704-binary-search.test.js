import { search } from '../0704-binary-search.js';

describe('0704-binary-search', () => {
  it("search([2, 7, 11, 15], 9)", () => {
    const result = search([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("search([3, 2, 4], 6)", () => {
    const result = search([3, 2, 4], 6);
    expect(result).toEqual(-1);
  });

  it("search([3, 3], 6)", () => {
    const result = search([3, 3], 6);
    expect(result).toEqual(-1);
  });

  it("search([-1, -2, -3, -4, -5], -8)", () => {
    const result = search([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("search([1, 2], 3)", () => {
    const result = search([1, 2], 3);
    expect(result).toEqual(-1);
  });

  it("search([0, 4, 3, 0], 0)", () => {
    const result = search([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
