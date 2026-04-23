import { minDeletionSize } from '../0944-delete-columns-to-make-sorted.js';

describe('0944-delete-columns-to-make-sorted', () => {
  it("minDeletionSize([\"flower\", \"flow\", \"flight\"])", () => {
    const result = minDeletionSize(["flower", "flow", "flight"]);
    expect(result).toEqual(2);
  });

  it("minDeletionSize([\"a\", \"b\", \"c\"])", () => {
    const result = minDeletionSize(["a", "b", "c"]);
    expect(result).toEqual(0);
  });

  it("minDeletionSize([\"\"])", () => {
    const result = minDeletionSize([""]);
    expect(result).toEqual(0);
  });

  it("minDeletionSize([\"ab\", \"a\", \"abc\"])", () => {
    const result = minDeletionSize(["ab", "a", "abc"]);
    expect(result).toEqual(0);
  });
});
