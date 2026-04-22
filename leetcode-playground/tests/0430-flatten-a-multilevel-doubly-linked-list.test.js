import { flatten } from '../0430-flatten-a-multilevel-doubly-linked-list.js';

describe('0430-flatten-a-multilevel-doubly-linked-list', () => {
  it("flatten([1, 2, 3])", () => {
    const result = flatten([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("flatten([])", () => {
    const result = flatten([]);
    expect(result).toEqual([]);
  });

  it("flatten([0])", () => {
    const result = flatten([0]);
    expect(result).toEqual([0]);
  });

  it("flatten([-1, 0, 1])", () => {
    const result = flatten([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
