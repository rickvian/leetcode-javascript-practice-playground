import { findDuplicate } from '../0609-find-duplicate-file-in-system.js';

describe('0609-find-duplicate-file-in-system', () => {
  it("findDuplicate([\"flower\", \"flow\", \"flight\"])", () => {
    const result = findDuplicate(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("findDuplicate([\"a\", \"b\", \"c\"])", () => {
    const result = findDuplicate(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("findDuplicate([])", () => {
    const result = findDuplicate([]);
    expect(result).toEqual([]);
  });

  it("findDuplicate([\"\"])", () => {
    const result = findDuplicate([""]);
    expect(result).toEqual([]);
  });

  it("findDuplicate([\"ab\", \"a\", \"abc\"])", () => {
    const result = findDuplicate(["ab", "a", "abc"]);
    expect(result).toEqual([]);
  });
});
