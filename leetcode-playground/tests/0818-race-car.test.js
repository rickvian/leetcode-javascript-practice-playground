import { racecar } from '../0818-race-car.js';

describe('0818-race-car', () => {
  it("racecar(1)", () => {
    const result = racecar(1);
    expect(result).toEqual(1);
  });

  it("racecar(3)", () => {
    const result = racecar(3);
    expect(result).toEqual(2);
  });

  it("racecar(5)", () => {
    const result = racecar(5);
    expect(result).toEqual(7);
  });

  it("racecar(6)", () => {
    const result = racecar(6);
    expect(result).toEqual(5);
  });

  it("racecar(10)", () => {
    const result = racecar(10);
    expect(result).toEqual(7);
  });

  it("racecar(7)", () => {
    const result = racecar(7);
    expect(result).toEqual(3);
  });
});
