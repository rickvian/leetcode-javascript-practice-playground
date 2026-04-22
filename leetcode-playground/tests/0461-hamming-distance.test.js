import { hammingDistance } from '../0461-hamming-distance.js';

describe('0461-hamming-distance', () => {
  it("hammingDistance(1, 1)", () => {
    const result = hammingDistance(1, 1);
    expect(result).toEqual(0);
  });

  it("hammingDistance(0, 0)", () => {
    const result = hammingDistance(0, 0);
    expect(result).toEqual(0);
  });

  it("hammingDistance(3, 7)", () => {
    const result = hammingDistance(3, 7);
    expect(result).toEqual(1);
  });

  it("hammingDistance(100, 1000)", () => {
    const result = hammingDistance(100, 1000);
    expect(result).toEqual(5);
  });
});
