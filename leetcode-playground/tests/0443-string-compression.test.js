import { compress } from '../0443-string-compression.js';

describe('0443-string-compression', () => {
  it("compress([1, 2, 3])", () => {
    const result = compress([1, 2, 3]);
    expect(result).toEqual(3);
  });

  it("compress([])", () => {
    const result = compress([]);
    expect(result).toEqual(0);
  });

  it("compress([0])", () => {
    const result = compress([0]);
    expect(result).toEqual(1);
  });

  it("compress([-1, 0, 1])", () => {
    const result = compress([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
