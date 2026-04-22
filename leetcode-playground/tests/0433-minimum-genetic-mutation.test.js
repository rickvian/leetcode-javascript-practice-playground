import { minMutation } from '../0433-minimum-genetic-mutation.js';

describe('0433-minimum-genetic-mutation', () => {
  it("minMutation([1, 2, 3])", () => {
    const result = minMutation([1, 2, 3]);
    expect(result).toEqual(-1);
  });

  it("minMutation([])", () => {
    const result = minMutation([]);
    expect(result).toEqual(-1);
  });

  it("minMutation([0])", () => {
    const result = minMutation([0]);
    expect(result).toEqual(-1);
  });

  it("minMutation([-1, 0, 1])", () => {
    const result = minMutation([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
