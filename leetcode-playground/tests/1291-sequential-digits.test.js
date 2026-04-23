import { sequentialDigits } from '../1291-sequential-digits.js';

describe('1291-sequential-digits', () => {
  it("sequentialDigits(1, 1)", () => {
    const result = sequentialDigits(1, 1);
    expect(result).toEqual([]);
  });

  it("sequentialDigits(0, 0)", () => {
    const result = sequentialDigits(0, 0);
    expect(result).toEqual([]);
  });

  it("sequentialDigits(3, 7)", () => {
    const result = sequentialDigits(3, 7);
    expect(result).toEqual([]);
  });

  it("sequentialDigits(100, 1000)", () => {
    const result = sequentialDigits(100, 1000);
    expect(result).toEqual([123, 234, 345, 456, 567, 678, 789]);
  });
});
