import { numRollsToTarget } from '../1155-number-of-dice-rolls-with-target-sum.js';

describe('1155-number-of-dice-rolls-with-target-sum', () => {
  it("numRollsToTarget(1, 6...)", () => {
    const result = numRollsToTarget(1, 6, 3);
    expect(result).toEqual(1);
  });

  it("numRollsToTarget(2, 6...)", () => {
    const result = numRollsToTarget(2, 6, 7);
    expect(result).toEqual(6);
  });

  it("numRollsToTarget(30, 30...)", () => {
    const result = numRollsToTarget(30, 30, 500);
    expect(result).toEqual(222616187);
  });

  it("numRollsToTarget(1, 1...)", () => {
    const result = numRollsToTarget(1, 1, 1);
    expect(result).toEqual(1);
  });

  it("numRollsToTarget(2, 6...)", () => {
    const result = numRollsToTarget(2, 6, 13);
    expect(result).toEqual(0);
  });

  it("numRollsToTarget(3, 4...)", () => {
    const result = numRollsToTarget(3, 4, 5);
    expect(result).toEqual(6);
  });
});
