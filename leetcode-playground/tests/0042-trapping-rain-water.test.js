import { trap } from "../0042-trapping-rain-water";

describe("42. Trapping Rain Water", () => {
  test("Example 1: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test("Example 2: [4,2,0,3,2,5] -> 9", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test("empty array -> 0", () => {
    expect(trap([])).toBe(0);
  });

  test("single element -> 0", () => {
    expect(trap([5])).toBe(0);
  });

  test("two elements -> 0", () => {
    expect(trap([3, 2])).toBe(0);
  });

  test("flat surface -> 0", () => {
    expect(trap([3, 3, 3, 3])).toBe(0);
  });

  test("descending -> 0", () => {
    expect(trap([5, 4, 3, 2, 1])).toBe(0);
  });

  test("ascending -> 0", () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0);
  });

  test("simple valley -> 1", () => {
    expect(trap([1, 0, 1])).toBe(1);
  });

  test("multiple valleys", () => {
    expect(trap([3, 0, 2, 0, 4])).toBe(7);
  });
  // 0 1 0 3 0 2 0

  test("basic test", () => {
    expect(trap([0, 1, 0, 3, 0, 2, 0])).toBe(3);
  });
});
