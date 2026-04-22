import { canCompleteCircuit } from '../0134-gas-station.js';

describe('0134-gas-station', () => {
  it("canCompleteCircuit([1, 2, 3], [4, 5, 6])", () => {
    const result = canCompleteCircuit([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(-1);
  });

  it("canCompleteCircuit([1], [1])", () => {
    const result = canCompleteCircuit([1], [1]);
    expect(result).toEqual(0);
  });

  it("canCompleteCircuit([1, 3], [2])", () => {
    const result = canCompleteCircuit([1, 3], [2]);
    expect(result).toEqual(-1);
  });

  it("canCompleteCircuit([1, 2], [3, 4])", () => {
    const result = canCompleteCircuit([1, 2], [3, 4]);
    expect(result).toEqual(-1);
  });
});
