import { numRabbits } from '../0781-rabbits-in-forest.js';

describe('0781-rabbits-in-forest', () => {
  it("numRabbits([1, 2, 3, 4, 5])", () => {
    const result = numRabbits([1, 2, 3, 4, 5]);
    expect(result).toEqual(20);
  });

  it("numRabbits([])", () => {
    const result = numRabbits([]);
    expect(result).toEqual(0);
  });

  it("numRabbits([1])", () => {
    const result = numRabbits([1]);
    expect(result).toEqual(2);
  });

  it("numRabbits([1, 1])", () => {
    const result = numRabbits([1, 1]);
    expect(result).toEqual(2);
  });

  it("numRabbits([3, 1, 4, 1, 5])", () => {
    const result = numRabbits([3, 1, 4, 1, 5]);
    expect(result).toEqual(17);
  });

  it("numRabbits([-1, 0, 1])", () => {
    const result = numRabbits([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
