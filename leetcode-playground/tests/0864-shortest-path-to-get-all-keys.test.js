import { shortestPathAllKeys } from '../0864-shortest-path-to-get-all-keys.js';

describe('0864-shortest-path-to-get-all-keys', () => {
  it("shortestPathAllKeys([\"flower\", \"flow\", \"flight\"])", () => {
    const result = shortestPathAllKeys(["flower", "flow", "flight"]);
    expect(result).toEqual(-1);
  });

  it("shortestPathAllKeys([\"a\", \"b\", \"c\"])", () => {
    const result = shortestPathAllKeys(["a", "b", "c"]);
    expect(result).toEqual(-1);
  });

  it("shortestPathAllKeys([\"\"])", () => {
    const result = shortestPathAllKeys([""]);
    expect(result).toEqual(0);
  });

  it("shortestPathAllKeys([\"ab\", \"a\", \"abc\"])", () => {
    const result = shortestPathAllKeys(["ab", "a", "abc"]);
    expect(result).toEqual(-1);
  });
});
