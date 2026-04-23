import { minimizeError } from '../1058-minimize-rounding-error-to-meet-target.js';

describe('1058-minimize-rounding-error-to-meet-target', () => {
  it("minimizeError([1, 2, 3])", () => {
    const result = minimizeError([1, 2, 3]);
    expect(result).toEqual("0.000");
  });

  it("minimizeError([])", () => {
    const result = minimizeError([]);
    expect(result).toEqual("0.000");
  });

  it("minimizeError([0])", () => {
    const result = minimizeError([0]);
    expect(result).toEqual("0.000");
  });

  it("minimizeError([-1, 0, 1])", () => {
    const result = minimizeError([-1, 0, 1]);
    expect(result).toEqual("0.000");
  });
});
