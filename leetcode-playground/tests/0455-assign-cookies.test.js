import { findContentChildren } from '../0455-assign-cookies.js';

describe('0455-assign-cookies', () => {
  it("findContentChildren([1, 2, 3], [4, 5, 6])", () => {
    const result = findContentChildren([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(3);
  });

  it("findContentChildren([1], [1])", () => {
    const result = findContentChildren([1], [1]);
    expect(result).toEqual(1);
  });

  it("findContentChildren([1, 3], [2])", () => {
    const result = findContentChildren([1, 3], [2]);
    expect(result).toEqual(1);
  });

  it("findContentChildren([1, 2], [3, 4])", () => {
    const result = findContentChildren([1, 2], [3, 4]);
    expect(result).toEqual(2);
  });
});
