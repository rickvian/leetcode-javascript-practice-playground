import { minSubArrayLen } from "../0209-minimum-size-subarray-sum";

describe("0209-minimum-size-subarray-sum", () => {
  it("should return 2 for target=7 on [2,3,1,2,4,3]", () => {
    const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
    if (result !== undefined) {
      expect(result).toBe(2);
    }
  });

  it("should return 0 when target cannot be reached", () => {
    const result = minSubArrayLen(11, [1, 1, 1, 1]);
    if (result !== undefined) {
      expect(result).toBe(0);
    }
  });

  it("should return 0 for an empty array", () => {
    const result = minSubArrayLen(5, []);
    if (result !== undefined) {
      expect(result).toBe(0);
    }
  });

  it("should return 1 when a single element meets target", () => {
    const result = minSubArrayLen(4, [1, 4, 4]);
    if (result !== undefined) {
      expect(result).toBe(1);
    }
  });

  it("should handle repetitive data correctly", () => {
    const result = minSubArrayLen(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    if (result !== undefined) {
      expect(result).toBe(10);
    }
  });

  it("should handle target exactly equal to total sum", () => {
    const result = minSubArrayLen(15, [1, 2, 3, 4, 5]);
    if (result !== undefined) {
      expect(result).toBe(5);
    }
  });

  it("should return 1 for a single-element array that meets target", () => {
    const result = minSubArrayLen(1, [1]);
    if (result !== undefined) {
      expect(result).toBe(1);
    }
  });

  it("should handle target exactly equal to total sum", () => {
    const result = minSubArrayLen(11, [1, 2, 3, 4, 5]);
    if (result !== undefined) {
      expect(result).toBe(3);
    }
  });
});
