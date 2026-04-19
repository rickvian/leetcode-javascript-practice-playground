import { maxArea } from "../0011-container-with-most-water";

describe("0011-container-with-most-water", () => {
  it("should return 49 for [1,8,6,2,5,4,8,3,7]", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("should return 1 for [1,1]", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("should return 16 for [4,3,2,1,4]", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it("should return 2 for [1,2,1]", () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  it("should handle array with increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });

  it("should handle array with decreasing heights", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it("should handle array with tall bars in the middle", () => {
    expect(maxArea([2, 3, 4, 5, 25, 24, 3, 4])).toBe(24);
  });

  it("should handle array with maximum width but low height", () => {
    expect(maxArea([1, 1, 1, 1])).toBe(3);
  });

  it("should handle minimum input of two equal elements", () => {
    expect(maxArea([0, 0])).toBe(0);
  });

  it("should handle all identical heights", () => {
    expect(maxArea([7, 7, 7, 7, 7])).toBe(28);
  });

  it("should handle one zero-height bar at boundary", () => {
    expect(maxArea([0, 10])).toBe(0);
  });

  it("should handle large values at exact range limits", () => {
    expect(maxArea([10000, 10000])).toBe(10000);
  });
});
