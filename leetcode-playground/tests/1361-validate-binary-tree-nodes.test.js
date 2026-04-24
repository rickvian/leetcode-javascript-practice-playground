import { validateBinaryTreeNodes } from '../1361-validate-binary-tree-nodes.js';

describe('1361-validate-binary-tree-nodes', () => {
  it("validateBinaryTreeNodes([1, 2, 3])", () => {
    const result = validateBinaryTreeNodes([1, 2, 3]);
    expect(result).toEqual(false);
  });

  it("validateBinaryTreeNodes([])", () => {
    const result = validateBinaryTreeNodes([]);
    expect(result).toEqual(false);
  });

  it("validateBinaryTreeNodes([0])", () => {
    const result = validateBinaryTreeNodes([0]);
    expect(result).toEqual(false);
  });

  it("validateBinaryTreeNodes([-1, 0, 1])", () => {
    const result = validateBinaryTreeNodes([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
