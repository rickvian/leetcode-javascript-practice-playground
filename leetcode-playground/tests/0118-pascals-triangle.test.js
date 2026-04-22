import { generate } from '../0118-pascals-triangle.js';

describe('0118-pascals-triangle', () => {
  it("generate(1)", () => {
    const result = generate(1);
    expect(result).toEqual([[1]]);
  });

  it("generate(2)", () => {
    const result = generate(2);
    expect(result).toEqual([[1], [1, 1]]);
  });

  it("generate(3)", () => {
    const result = generate(3);
    expect(result).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it("generate(4)", () => {
    const result = generate(4);
    expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  });

  it("generate(5)", () => {
    const result = generate(5);
    expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  it("generate(0)", () => {
    const result = generate(0);
    expect(result).toEqual([[1]]);
  });
});
