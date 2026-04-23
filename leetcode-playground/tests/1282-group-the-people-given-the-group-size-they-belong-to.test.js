import { groupThePeople } from '../1282-group-the-people-given-the-group-size-they-belong-to.js';

describe('1282-group-the-people-given-the-group-size-they-belong-to', () => {
  it("groupThePeople([1, 2, 3, 4, 5])", () => {
    const result = groupThePeople([1, 2, 3, 4, 5]);
    expect(result).toEqual([[0]]);
  });

  it("groupThePeople([])", () => {
    const result = groupThePeople([]);
    expect(result).toEqual([]);
  });

  it("groupThePeople([1])", () => {
    const result = groupThePeople([1]);
    expect(result).toEqual([[0]]);
  });

  it("groupThePeople([1, 1])", () => {
    const result = groupThePeople([1, 1]);
    expect(result).toEqual([[0], [1]]);
  });

  it("groupThePeople([3, 1, 4, 1, 5])", () => {
    const result = groupThePeople([3, 1, 4, 1, 5]);
    expect(result).toEqual([[1], [3]]);
  });

  it("groupThePeople([-1, 0, 1])", () => {
    const result = groupThePeople([-1, 0, 1]);
    expect(result).toEqual([[2]]);
  });
});
