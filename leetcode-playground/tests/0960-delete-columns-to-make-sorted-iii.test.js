import { minDeletionSize } from '../0960-delete-columns-to-make-sorted-iii.js';

describe('0960-delete-columns-to-make-sorted-iii', () => {
  it("minDeletionSize([\"flower\", \"flow\", \"flight\"])", () => {
    const result = minDeletionSize(["flower", "flow", "flight"]);
    expect(result).toEqual(4);
  });

  it("minDeletionSize([\"a\", \"b\", \"c\"])", () => {
    const result = minDeletionSize(["a", "b", "c"]);
    expect(result).toEqual(0);
  });

  it("minDeletionSize([\"ab\", \"a\", \"abc\"])", () => {
    const result = minDeletionSize(["ab", "a", "abc"]);
    expect(result).toEqual(1);
  });
});
