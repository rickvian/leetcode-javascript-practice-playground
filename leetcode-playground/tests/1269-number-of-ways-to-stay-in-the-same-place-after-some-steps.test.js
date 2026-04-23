import { numWays } from '../1269-number-of-ways-to-stay-in-the-same-place-after-some-steps.js';

describe('1269-number-of-ways-to-stay-in-the-same-place-after-some-steps', () => {
  it("numWays(1, 1)", () => {
    const result = numWays(1, 1);
    expect(result).toEqual(1);
  });

  it("numWays(0, 0)", () => {
    const result = numWays(0, 0);
    expect(result).toEqual(1);
  });

  it("numWays(3, 7)", () => {
    const result = numWays(3, 7);
    expect(result).toEqual(4);
  });

  it("numWays(100, 1000)", () => {
    const result = numWays(100, 1000);
    expect(result).toEqual(345787718);
  });
});
