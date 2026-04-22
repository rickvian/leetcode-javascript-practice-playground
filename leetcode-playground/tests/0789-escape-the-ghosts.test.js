import { escapeGhosts } from '../0789-escape-the-ghosts.js';

describe('0789-escape-the-ghosts', () => {
  it("escapeGhosts([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = escapeGhosts([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(true);
  });

  it("escapeGhosts([[1, 2], [3, 4]], 5)", () => {
    const result = escapeGhosts([[1, 2], [3, 4]], 5);
    expect(result).toEqual(true);
  });

  it("escapeGhosts([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = escapeGhosts([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(true);
  });
});
