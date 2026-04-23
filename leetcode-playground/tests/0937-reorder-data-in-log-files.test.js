import { reorderLogFiles } from '../0937-reorder-data-in-log-files.js';

describe('0937-reorder-data-in-log-files', () => {
  it("reorderLogFiles([\"flower\", \"flow\", \"flight\"])", () => {
    const result = reorderLogFiles(["flower", "flow", "flight"]);
    expect(result).toEqual(["flight", "flow", "flower"]);
  });

  it("reorderLogFiles([\"a\", \"b\", \"c\"])", () => {
    const result = reorderLogFiles(["a", "b", "c"]);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("reorderLogFiles([])", () => {
    const result = reorderLogFiles([]);
    expect(result).toEqual([]);
  });

  it("reorderLogFiles([\"\"])", () => {
    const result = reorderLogFiles([""]);
    expect(result).toEqual([""]);
  });

  it("reorderLogFiles([\"ab\", \"a\", \"abc\"])", () => {
    const result = reorderLogFiles(["ab", "a", "abc"]);
    expect(result).toEqual(["a", "ab", "abc"]);
  });
});
