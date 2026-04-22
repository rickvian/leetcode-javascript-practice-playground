import { shortestPathLength } from '../0847-shortest-path-visiting-all-nodes.js';

describe('0847-shortest-path-visiting-all-nodes', () => {
  it("shortestPathLength([[1, 2], [3, 4]])", () => {
    const result = shortestPathLength([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("shortestPathLength([[1]])", () => {
    const result = shortestPathLength([[1]]);
    expect(result).toEqual(0);
  });

  it("shortestPathLength([[]])", () => {
    const result = shortestPathLength([[]]);
    expect(result).toEqual(0);
  });
});
