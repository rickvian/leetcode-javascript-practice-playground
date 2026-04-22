import { countComponents } from '../0323-number-of-connected-components-in-an-undirected-graph.js';

describe('0323-number-of-connected-components-in-an-undirected-graph', () => {
  it("countComponents(2, [[1, 0]])", () => {
    const result = countComponents(2, [[1, 0]]);
    expect(result).toEqual(1);
  });

  it("countComponents(2, [[1, 0], [0, 1]])", () => {
    const result = countComponents(2, [[1, 0], [0, 1]]);
    expect(result).toEqual(1);
  });

  it("countComponents(3, [[1, 0], [2, 1]])", () => {
    const result = countComponents(3, [[1, 0], [2, 1]]);
    expect(result).toEqual(1);
  });

  it("countComponents(1, [])", () => {
    const result = countComponents(1, []);
    expect(result).toEqual(1);
  });

  it("countComponents(4, [[1, 0], [2, 0], [3, 1], [3, 2]])", () => {
    const result = countComponents(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(result).toEqual(1);
  });
});
