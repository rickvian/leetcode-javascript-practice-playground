import { maximalSquare } from '../0221-maximal-square.js';

describe('0221-maximal-square', () => {
  it("maximalSquare([[\"1\", \"0\", \"1\", \"0\", \"0\"], [\"1\", \"0\", \"1\", \"1\", \"1\"], [\"1\", \"1\", \"1\", \"1\", \"1\"], [\"1\", \"0\", \"0\", \"1\", \"0\"]])", () => {
    const result = maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]);
    expect(result).toEqual(4);
  });

  it("maximalSquare([[\"0\"]])", () => {
    const result = maximalSquare([["0"]]);
    expect(result).toEqual(0);
  });

  it("maximalSquare([[\"1\"]])", () => {
    const result = maximalSquare([["1"]]);
    expect(result).toEqual(1);
  });

  it("maximalSquare([[\"0\", \"1\"], [\"1\", \"0\"]])", () => {
    const result = maximalSquare([["0", "1"], ["1", "0"]]);
    expect(result).toEqual(1);
  });

  it("maximalSquare([[\"1\", \"1\", \"1\"], [\"1\", \"1\", \"1\"], [\"1\", \"1\", \"1\"]])", () => {
    const result = maximalSquare([["1", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]]);
    expect(result).toEqual(9);
  });
});
