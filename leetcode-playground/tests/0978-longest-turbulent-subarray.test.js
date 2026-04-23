import { maxTurbulenceSize } from '../0978-longest-turbulent-subarray.js';

describe('0978-longest-turbulent-subarray', () => {
  it("maxTurbulenceSize([1, 2, 3, 4, 5])", () => {
    const result = maxTurbulenceSize([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("maxTurbulenceSize([])", () => {
    const result = maxTurbulenceSize([]);
    expect(result).toEqual(1);
  });

  it("maxTurbulenceSize([1])", () => {
    const result = maxTurbulenceSize([1]);
    expect(result).toEqual(1);
  });

  it("maxTurbulenceSize([1, 1])", () => {
    const result = maxTurbulenceSize([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxTurbulenceSize([3, 1, 4, 1, 5])", () => {
    const result = maxTurbulenceSize([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("maxTurbulenceSize([-1, 0, 1])", () => {
    const result = maxTurbulenceSize([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
