import { validTree } from '../0261-graph-valid-tree.js';

describe('0261-graph-valid-tree', () => {
  it("validTree(2, [[1, 0]])", () => {
    const result = validTree(2, [[1, 0]]);
    expect(result).toEqual(true);
  });

  it("validTree(2, [[1, 0], [0, 1]])", () => {
    const result = validTree(2, [[1, 0], [0, 1]]);
    expect(result).toEqual(false);
  });

  it("validTree(3, [[1, 0], [2, 1]])", () => {
    const result = validTree(3, [[1, 0], [2, 1]]);
    expect(result).toEqual(true);
  });

  it("validTree(1, [])", () => {
    const result = validTree(1, []);
    expect(result).toEqual(true);
  });

  it("validTree(4, [[1, 0], [2, 0], [3, 1], [3, 2]])", () => {
    const result = validTree(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(result).toEqual(false);
  });
});
