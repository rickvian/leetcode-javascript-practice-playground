import { fizzBuzz } from '../0412-fizz-buzz.js';

describe('0412-fizz-buzz', () => {
  it("fizzBuzz(1)", () => {
    const result = fizzBuzz(1);
    expect(result).toEqual(["1"]);
  });

  it("fizzBuzz(3)", () => {
    const result = fizzBuzz(3);
    expect(result).toEqual(["1", "2", "Fizz"]);
  });

  it("fizzBuzz(5)", () => {
    const result = fizzBuzz(5);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("fizzBuzz(15)", () => {
    const result = fizzBuzz(15);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });

  it("fizzBuzz(10)", () => {
    const result = fizzBuzz(10);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
  });

  it("fizzBuzz(20)", () => {
    const result = fizzBuzz(20);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz"]);
  });
});
