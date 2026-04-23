import { removeSubfolders } from '../1233-remove-sub-folders-from-the-filesystem.js';

describe('1233-remove-sub-folders-from-the-filesystem', () => {
  it("removeSubfolders([\"flower\", \"flow\", \"flight\"])", () => {
    const result = removeSubfolders(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("removeSubfolders([\"a\", \"b\", \"c\"])", () => {
    const result = removeSubfolders(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("removeSubfolders([])", () => {
    const result = removeSubfolders([]);
    expect(result).toEqual([]);
  });

  it("removeSubfolders([\"\"])", () => {
    const result = removeSubfolders([""]);
    expect(result).toEqual([]);
  });

  it("removeSubfolders([\"ab\", \"a\", \"abc\"])", () => {
    const result = removeSubfolders(["ab", "a", "abc"]);
    expect(result).toEqual([]);
  });
});
