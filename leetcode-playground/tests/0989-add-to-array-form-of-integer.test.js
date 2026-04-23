import { addToArrayForm } from '../0989-add-to-array-form-of-integer.js';

describe('0989-add-to-array-form-of-integer', () => {
  it("addToArrayForm([2, 7, 11, 15], 9)", () => {
    const result = addToArrayForm([2, 7, 11, 15], 9);
    expect(result).toEqual(["2", "7", "1", "1", "2", "4"]);
  });

  it("addToArrayForm([3, 2, 4], 6)", () => {
    const result = addToArrayForm([3, 2, 4], 6);
    expect(result).toEqual(["3", "3", "0"]);
  });

  it("addToArrayForm([3, 3], 6)", () => {
    const result = addToArrayForm([3, 3], 6);
    expect(result).toEqual(["3", "9"]);
  });

  it("addToArrayForm([1, 2], 3)", () => {
    const result = addToArrayForm([1, 2], 3);
    expect(result).toEqual(["1", "5"]);
  });

  it("addToArrayForm([0, 4, 3, 0], 0)", () => {
    const result = addToArrayForm([0, 4, 3, 0], 0);
    expect(result).toEqual(["4", "3", "0"]);
  });
});
