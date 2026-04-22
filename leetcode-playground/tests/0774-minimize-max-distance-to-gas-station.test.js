import { minmaxGasDist } from '../0774-minimize-max-distance-to-gas-station.js';

describe('0774-minimize-max-distance-to-gas-station', () => {
  it("minmaxGasDist([2, 7, 11, 15], 9)", () => {
    const result = minmaxGasDist([2, 7, 11, 15], 9);
    expect(result).toEqual(1.2500005960464478);
  });

  it("minmaxGasDist([3, 2, 4], 6)", () => {
    const result = minmaxGasDist([3, 2, 4], 6);
    expect(result).toEqual(0.13333415985107422);
  });

  it("minmaxGasDist([3, 3], 6)", () => {
    const result = minmaxGasDist([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("minmaxGasDist([-1, -2, -3, -4, -5], -8)", () => {
    const result = minmaxGasDist([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("minmaxGasDist([1, 2], 3)", () => {
    const result = minmaxGasDist([1, 2], 3);
    expect(result).toEqual(0.2500009536743164);
  });

  it("minmaxGasDist([0, 4, 3, 0], 0)", () => {
    const result = minmaxGasDist([0, 4, 3, 0], 0);
    expect(result).toEqual(9.5367431640625e-07);
  });
});
