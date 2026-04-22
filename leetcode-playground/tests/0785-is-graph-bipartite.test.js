import { isBipartite } from '../0785-is-graph-bipartite.js';

describe('0785-is-graph-bipartite', () => {
  it("isBipartite([[1, 2], [3, 4]])", () => {
    const result = isBipartite([[1, 2], [3, 4]]);
    expect(result).toEqual(false);
  });

  it("isBipartite([[1]])", () => {
    const result = isBipartite([[1]]);
    expect(result).toEqual(false);
  });

  it("isBipartite([[]])", () => {
    const result = isBipartite([[]]);
    expect(result).toEqual(true);
  });

  it("isBipartite([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = isBipartite([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
