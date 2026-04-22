import { asteroidCollision } from '../0735-asteroid-collision.js';

describe('0735-asteroid-collision', () => {
  it("asteroidCollision([1, 2, 3, 4, 5])", () => {
    const result = asteroidCollision([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("asteroidCollision([])", () => {
    const result = asteroidCollision([]);
    expect(result).toEqual([]);
  });

  it("asteroidCollision([1])", () => {
    const result = asteroidCollision([1]);
    expect(result).toEqual([1]);
  });

  it("asteroidCollision([1, 1])", () => {
    const result = asteroidCollision([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("asteroidCollision([3, 1, 4, 1, 5])", () => {
    const result = asteroidCollision([3, 1, 4, 1, 5]);
    expect(result).toEqual([3, 1, 4, 1, 5]);
  });

  it("asteroidCollision([-1, 0, 1])", () => {
    const result = asteroidCollision([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
