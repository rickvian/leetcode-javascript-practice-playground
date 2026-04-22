import { wiggleMaxLength } from '../0376-wiggle-subsequence.js';

describe('0376-wiggle-subsequence', () => {
  it("wiggleMaxLength([1, 2, 3, 4, 5])", () => {
    const result = wiggleMaxLength([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("wiggleMaxLength([])", () => {
    const result = wiggleMaxLength([]);
    expect(result).toEqual(1);
  });

  it("wiggleMaxLength([1])", () => {
    const result = wiggleMaxLength([1]);
    expect(result).toEqual(1);
  });

  it("wiggleMaxLength([1, 1])", () => {
    const result = wiggleMaxLength([1, 1]);
    expect(result).toEqual(1);
  });

  it("wiggleMaxLength([3, 1, 4, 1, 5])", () => {
    const result = wiggleMaxLength([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("wiggleMaxLength([-1, 0, 1])", () => {
    const result = wiggleMaxLength([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
