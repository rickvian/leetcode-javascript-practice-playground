import { findAndReplacePattern } from '../0890-find-and-replace-pattern.js';

describe('0890-find-and-replace-pattern', () => {
  it("findAndReplacePattern([])", () => {
    const result = findAndReplacePattern([]);
    expect(result).toEqual([]);
  });
});
