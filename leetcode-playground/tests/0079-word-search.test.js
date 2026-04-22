import { exist } from '../0079-word-search.js';

describe('0079-word-search', () => {
  it("exist([1, 2, 3])", () => {
    const result = exist([1, 2, 3]);
    expect(result).toEqual(false);
  });

  it("exist([])", () => {
    const result = exist([]);
    expect(result).toEqual(false);
  });

  it("exist([0])", () => {
    const result = exist([0]);
    expect(result).toEqual(false);
  });

  it("exist([-1, 0, 1])", () => {
    const result = exist([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
