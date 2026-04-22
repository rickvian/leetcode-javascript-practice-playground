import { mirrorReflection } from '../0858-mirror-reflection.js';

describe('0858-mirror-reflection', () => {
  it("mirrorReflection(1, 1)", () => {
    const result = mirrorReflection(1, 1);
    expect(result).toEqual(1);
  });

  it("mirrorReflection(0, 0)", () => {
    const result = mirrorReflection(0, 0);
    expect(result).toEqual(2);
  });

  it("mirrorReflection(3, 7)", () => {
    const result = mirrorReflection(3, 7);
    expect(result).toEqual(1);
  });

  it("mirrorReflection(100, 1000)", () => {
    const result = mirrorReflection(100, 1000);
    expect(result).toEqual(0);
  });
});
