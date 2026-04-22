import { maxEnvelopes } from '../0354-russian-doll-envelopes.js';

describe('0354-russian-doll-envelopes', () => {
  it("maxEnvelopes([[1, 2], [3, 4]])", () => {
    const result = maxEnvelopes([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("maxEnvelopes([[1]])", () => {
    const result = maxEnvelopes([[1]]);
    expect(result).toEqual(1);
  });

  it("maxEnvelopes([[]])", () => {
    const result = maxEnvelopes([[]]);
    expect(result).toEqual(1);
  });

  it("maxEnvelopes([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxEnvelopes([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
