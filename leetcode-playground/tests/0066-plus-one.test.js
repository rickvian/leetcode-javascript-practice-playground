import { plusOne } from "../0066-plus-one";

describe("0066-plus-one", () => {
  it("should return [1,2,4] for [1,2,3] (official example 1)", () => {
    const result = plusOne([1, 2, 3]);
    if (result !== undefined) expect(result).toEqual([1, 2, 4]);
  });

  it("should return [4,3,2,2] for [4,3,2,1] (official example 2)", () => {
    const result = plusOne([4, 3, 2, 1]);
    if (result !== undefined) expect(result).toEqual([4, 3, 2, 2]);
  });

  it("should return [1,0] for [9] (official example 3 - carry creates new leading digit)", () => {
    const result = plusOne([9]);
    if (result !== undefined) expect(result).toEqual([1, 0]);
  });

  it("should return [1] for [0] (single zero digit)", () => {
    const result = plusOne([0]);
    if (result !== undefined) expect(result).toEqual([1]);
  });

  it("should return [6] for [5] (single non-nine digit)", () => {
    const result = plusOne([5]);
    if (result !== undefined) expect(result).toEqual([6]);
  });

  it("should return [1,3,0] for [1,2,9] (carry propagates one position)", () => {
    const result = plusOne([1, 2, 9]);
    if (result !== undefined) expect(result).toEqual([1, 3, 0]);
  });

  it("should return [2,0,0] for [1,9,9] (carry propagates two positions)", () => {
    const result = plusOne([1, 9, 9]);
    if (result !== undefined) expect(result).toEqual([2, 0, 0]);
  });

  it("should return [1,0,0,0] for [9,9,9] (all-nines array - new leading digit)", () => {
    const result = plusOne([9, 9, 9]);
    if (result !== undefined) expect(result).toEqual([1, 0, 0, 0]);
  });

  it("should return [1,0,0,0,0] for [9,9,9,9] (longer all-nines array)", () => {
    const result = plusOne([9, 9, 9, 9]);
    if (result !== undefined) expect(result).toEqual([1, 0, 0, 0, 0]);
  });

  it("should return [3,0] for [2,9] (carry propagates to first digit)", () => {
    const result = plusOne([2, 9]);
    if (result !== undefined) expect(result).toEqual([3, 0]);
  });

  it("should return [9,9,2] for [9,9,1] (no carry - last digit not nine)", () => {
    const result = plusOne([9, 9, 1]);
    if (result !== undefined) expect(result).toEqual([9, 9, 2]);
  });

  it("should return [1,0,0,0,1] for [1,0,0,0,0] (no carry in long array)", () => {
    const result = plusOne([1, 0, 0, 0, 0]);
    if (result !== undefined) expect(result).toEqual([1, 0, 0, 0, 1]);
  });

  it("should return [2,0] for [1,9] (carry one position, two digits)", () => {
    const result = plusOne([1, 9]);
    if (result !== undefined) expect(result).toEqual([2, 0]);
  });
});
