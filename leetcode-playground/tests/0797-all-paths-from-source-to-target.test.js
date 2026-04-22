import { allPathsSourceTarget } from '../0797-all-paths-from-source-to-target.js';

describe('0797-all-paths-from-source-to-target', () => {
  it("allPathsSourceTarget([[1]])", () => {
    const result = allPathsSourceTarget([[1]]);
    expect(result).toEqual([[0]]);
  });

  it("allPathsSourceTarget([[]])", () => {
    const result = allPathsSourceTarget([[]]);
    expect(result).toEqual([[0]]);
  });
});
