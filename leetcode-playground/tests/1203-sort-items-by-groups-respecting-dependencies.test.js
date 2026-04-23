import { sortItems } from '../1203-sort-items-by-groups-respecting-dependencies.js';

describe('1203-sort-items-by-groups-respecting-dependencies', () => {
  it("sortItems([1, 2, 3])", () => {
    const result = sortItems([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("sortItems([])", () => {
    const result = sortItems([]);
    expect(result).toEqual([]);
  });

  it("sortItems([0])", () => {
    const result = sortItems([0]);
    expect(result).toEqual([]);
  });

  it("sortItems([-1, 0, 1])", () => {
    const result = sortItems([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
