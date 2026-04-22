import { canPlaceFlowers } from '../0605-can-place-flowers.js';

describe('0605-can-place-flowers', () => {
  it("canPlaceFlowers([2, 7, 11, 15], 9)", () => {
    const result = canPlaceFlowers([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("canPlaceFlowers([3, 2, 4], 6)", () => {
    const result = canPlaceFlowers([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("canPlaceFlowers([3, 3], 6)", () => {
    const result = canPlaceFlowers([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("canPlaceFlowers([-1, -2, -3, -4, -5], -8)", () => {
    const result = canPlaceFlowers([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(true);
  });

  it("canPlaceFlowers([1, 2], 3)", () => {
    const result = canPlaceFlowers([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("canPlaceFlowers([0, 4, 3, 0], 0)", () => {
    const result = canPlaceFlowers([0, 4, 3, 0], 0);
    expect(result).toEqual(true);
  });
});
