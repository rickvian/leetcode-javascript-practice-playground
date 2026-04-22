import { removeComments } from '../0722-remove-comments.js';

describe('0722-remove-comments', () => {
  it("removeComments([\"flower\", \"flow\", \"flight\"])", () => {
    const result = removeComments(["flower", "flow", "flight"]);
    expect(result).toEqual(["flower", "flow", "flight"]);
  });

  it("removeComments([\"a\", \"b\", \"c\"])", () => {
    const result = removeComments(["a", "b", "c"]);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("removeComments([])", () => {
    const result = removeComments([]);
    expect(result).toEqual([]);
  });

  it("removeComments([\"\"])", () => {
    const result = removeComments([""]);
    expect(result).toEqual([]);
  });

  it("removeComments([\"ab\", \"a\", \"abc\"])", () => {
    const result = removeComments(["ab", "a", "abc"]);
    expect(result).toEqual(["ab", "a", "abc"]);
  });
});
