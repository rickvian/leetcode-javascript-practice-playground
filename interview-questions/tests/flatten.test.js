import flatten from "../flatten";

describe("flatten", () => {
  test("returns a new array for a flat array", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("flattens one level of nested arrays", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test("flattens deeply nested arrays", () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("handles empty arrays", () => {
    expect(flatten([])).toEqual([]);
  });

  test("removes nested empty arrays", () => {
    expect(flatten([[], [1, []], [[2]]])).toEqual([1, 2]);
  });

  test("keeps falsy and nullish values", () => {
    expect(flatten([null, [undefined, [false, 0, ""]]])).toEqual([
      null,
      undefined,
      false,
      0,
      "",
    ]);
  });

  test("wraps non-array values", () => {
    expect(flatten("hello")).toEqual(["hello"]);
    expect(flatten(42)).toEqual([42]);
  });
});
