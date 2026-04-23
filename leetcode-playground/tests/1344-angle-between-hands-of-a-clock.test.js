import { angleClock } from '../1344-angle-between-hands-of-a-clock.js';

describe('1344-angle-between-hands-of-a-clock', () => {
  it("angleClock(1, 1)", () => {
    const result = angleClock(1, 1);
    expect(result).toEqual(24.5);
  });

  it("angleClock(0, 0)", () => {
    const result = angleClock(0, 0);
    expect(result).toEqual(0);
  });

  it("angleClock(3, 7)", () => {
    const result = angleClock(3, 7);
    expect(result).toEqual(51.5);
  });

  it("angleClock(100, 1000)", () => {
    const result = angleClock(100, 1000);
    expect(result).toEqual(-5020);
  });
});
