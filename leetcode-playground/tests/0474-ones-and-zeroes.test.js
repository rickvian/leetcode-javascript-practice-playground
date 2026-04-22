import { findMaxForm } from '../0474-ones-and-zeroes.js';

describe('0474-ones-and-zeroes', () => {
  it("findMaxForm([\"10\", \"0001\", \"111001\", \"1\", \"0\"], 5...)", () => {
    const result = findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);
    expect(result).toEqual(4);
  });

  it("findMaxForm([\"10\", \"0\", \"1\"], 1...)", () => {
    const result = findMaxForm(["10", "0", "1"], 1, 1);
    expect(result).toEqual(2);
  });

  it("findMaxForm([], 3...)", () => {
    const result = findMaxForm([], 3, 3);
    expect(result).toEqual(0);
  });

  it("findMaxForm([\"0\", \"1\", \"10\"], 2...)", () => {
    const result = findMaxForm(["0", "1", "10"], 2, 2);
    expect(result).toEqual(3);
  });

  it("findMaxForm([\"111\", \"100\", \"0\"], 3...)", () => {
    const result = findMaxForm(["111", "100", "0"], 3, 3);
    expect(result).toEqual(2);
  });
});
