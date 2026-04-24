import { numTimesAllBlue } from '../1375-number-of-times-binary-string-is-prefix-aligned.js';

describe('1375-number-of-times-binary-string-is-prefix-aligned', () => {
  it("numTimesAllBlue([1, 2, 3, 4, 5])", () => {
    const result = numTimesAllBlue([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("numTimesAllBlue([])", () => {
    const result = numTimesAllBlue([]);
    expect(result).toEqual(0);
  });

  it("numTimesAllBlue([1])", () => {
    const result = numTimesAllBlue([1]);
    expect(result).toEqual(1);
  });

  it("numTimesAllBlue([1, 1])", () => {
    const result = numTimesAllBlue([1, 1]);
    expect(result).toEqual(1);
  });

  it("numTimesAllBlue([3, 1, 4, 1, 5])", () => {
    const result = numTimesAllBlue([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("numTimesAllBlue([-1, 0, 1])", () => {
    const result = numTimesAllBlue([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
