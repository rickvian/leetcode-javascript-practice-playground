import { camelMatch } from '../1023-camelcase-matching.js';

describe('1023-camelcase-matching', () => {
  it("camelMatch([])", () => {
    const result = camelMatch([]);
    expect(result).toEqual([]);
  });
});
