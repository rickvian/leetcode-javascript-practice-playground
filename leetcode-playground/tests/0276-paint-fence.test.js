import { numWays } from '../0276-paint-fence.js';

describe('0276-paint-fence', () => {
  it("numWays(1, 1)", () => {
    const result = numWays(1, 1);
    expect(result).toEqual(1);
  });

  it("numWays(0, 0)", () => {
    const result = numWays(0, 0);
    expect(result).toEqual(0);
  });

  it("numWays(3, 7)", () => {
    const result = numWays(3, 7);
    expect(result).toEqual(336);
  });

  it("numWays(100, 1000)", () => {
    const result = numWays(100, 1000);
    expect(result).toEqual(9.999021015508455e+299);
  });
});
