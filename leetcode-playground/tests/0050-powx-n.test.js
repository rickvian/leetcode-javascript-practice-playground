import { myPow } from "../0050-powx-n";

describe("0050-powx-n", () => {
  // LeetCode official examples
  it("should return 1024 for x=2, n=10", () => {
    expect(myPow(2.0, 10)).toBeCloseTo(1024.0, 5);
  });

  it("should return 9.261 for x=2.1, n=3", () => {
    expect(myPow(2.1, 3)).toBeCloseTo(9.261000000000001, 5);
  });

  it("should return 0.25 for x=2, n=-2", () => {
    expect(myPow(2.0, -2)).toBeCloseTo(0.25, 5);
  });

  // n=0: any base returns 1
  it("should return 1 for any x with n=0", () => {
    expect(myPow(5, 0)).toBeCloseTo(1, 5);
  });

  it("should return 1 for x=0 with n=0", () => {
    expect(myPow(0, 0)).toBeCloseTo(1, 5);
  });

  // n=1: returns x
  it("should return x for n=1", () => {
    expect(myPow(3.5, 1)).toBeCloseTo(3.5, 5);
  });

  // negative n: reciprocal
  it("should return reciprocal for negative n", () => {
    expect(myPow(2, -1)).toBeCloseTo(0.5, 5);
  });

  it("should return 0.001 for x=10, n=-3", () => {
    expect(myPow(10, -3)).toBeCloseTo(0.001, 5);
  });

  // x=0 with positive n: returns 0
  it("should return 0 for x=0, n=5", () => {
    expect(myPow(0, 5)).toBeCloseTo(0, 5);
  });

  // x=1: always returns 1
  it("should return 1 for x=1 with any positive n", () => {
    expect(myPow(1, 1000)).toBeCloseTo(1, 5);
  });

  it("should return 1 for x=1 with negative n", () => {
    expect(myPow(1, -1000)).toBeCloseTo(1, 5);
  });

  // x=-1 with even n: returns 1
  it("should return 1 for x=-1 with even n", () => {
    expect(myPow(-1, 4)).toBeCloseTo(1, 5);
  });

  // x=-1 with odd n: returns -1
  it("should return -1 for x=-1 with odd n", () => {
    expect(myPow(-1, 5)).toBeCloseTo(-1, 5);
  });

  // x=-1 with negative even n: returns 1
  it("should return 1 for x=-1 with negative even n", () => {
    expect(myPow(-1, -4)).toBeCloseTo(1, 5);
  });

  // x=-1 with negative odd n: returns -1
  it("should return -1 for x=-1 with negative odd n", () => {
    expect(myPow(-1, -3)).toBeCloseTo(-1, 5);
  });

  // large positive n
  it("should handle large positive n", () => {
    expect(myPow(1.00001, 100000)).toBeCloseTo(2.71827, 2);
  });

  // fractional base
  it("should handle fractional base with positive n", () => {
    expect(myPow(0.5, 3)).toBeCloseTo(0.125, 5);
  });

  // negative base with positive n
  it("should handle negative base with positive even n", () => {
    expect(myPow(-2, 4)).toBeCloseTo(16, 5);
  });

  it("should handle negative base with positive odd n", () => {
    expect(myPow(-2, 3)).toBeCloseTo(-8, 5);
  });
});
