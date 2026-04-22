import { isSelfCrossing } from '../0335-self-crossing.js';

describe('0335-self-crossing', () => {
  it("isSelfCrossing([1, 2, 3, 4, 5])", () => {
    const result = isSelfCrossing([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("isSelfCrossing([])", () => {
    const result = isSelfCrossing([]);
    expect(result).toEqual(false);
  });

  it("isSelfCrossing([1])", () => {
    const result = isSelfCrossing([1]);
    expect(result).toEqual(false);
  });

  it("isSelfCrossing([1, 1])", () => {
    const result = isSelfCrossing([1, 1]);
    expect(result).toEqual(false);
  });

  it("isSelfCrossing([3, 1, 4, 1, 5])", () => {
    const result = isSelfCrossing([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("isSelfCrossing([-1, 0, 1])", () => {
    const result = isSelfCrossing([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
