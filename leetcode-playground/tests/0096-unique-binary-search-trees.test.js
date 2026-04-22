import { numTrees } from '../0096-unique-binary-search-trees.js';

describe('0096-unique-binary-search-trees', () => {
  it("numTrees(-121)", () => {
    const result = numTrees(-121);
    expect(result).toEqual(1);
  });

  it("numTrees(10)", () => {
    const result = numTrees(10);
    expect(result).toEqual(16796);
  });

  it("numTrees(0)", () => {
    const result = numTrees(0);
    expect(result).toEqual(1);
  });

  it("numTrees(-1)", () => {
    const result = numTrees(-1);
    expect(result).toEqual(1);
  });
});
