import { numberOfPatterns } from '../0351-android-unlock-patterns.js';

describe('0351-android-unlock-patterns', () => {
  it("numberOfPatterns(1, 1)", () => {
    const result = numberOfPatterns(1, 1);
    expect(result).toEqual(9);
  });

  it("numberOfPatterns(0, 0)", () => {
    const result = numberOfPatterns(0, 0);
    expect(result).toEqual(0);
  });

  it("numberOfPatterns(3, 7)", () => {
    const result = numberOfPatterns(3, 7);
    expect(result).toEqual(108024);
  });

  it("numberOfPatterns(100, 1000)", () => {
    const result = numberOfPatterns(100, 1000);
    expect(result).toEqual(0);
  });
});
