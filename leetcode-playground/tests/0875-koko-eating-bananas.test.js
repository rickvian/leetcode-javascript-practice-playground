import { minEatingSpeed } from "../0875-koko-eating-bananas.js";
import { describe, it, expect } from "@jest/globals";

describe("0875-koko-eating-bananas", () => {
  it("should return minimum eating speed for basic case", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  });

  it("should return speed equal to max pile when time equals pile count", () => {
    expect(minEatingSpeed([1, 1, 1, 1], 4)).toBe(1);
  });

  it("should handle single pile", () => {
    expect(minEatingSpeed([312884132], 968709470)).toBe(1);
  });

  it("should handle large piles with limited time", () => {
    expect(minEatingSpeed([1000000000], 2)).toBe(500000000);
  });

  it("should handle multiple large piles", () => {
    expect(minEatingSpeed([312884132, 968709470, 913273447], 968709470)).toBe(
      3,
    );
  });

  it("should return max pile when time is minimal", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 4)).toBe(11);
  });
});
