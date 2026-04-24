import { findMinFibonacciNumbers } from '../1414-find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k.js';

describe('1414-find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k', () => {
  it("findMinFibonacciNumbers(0)", () => {
    const result = findMinFibonacciNumbers(0);
    expect(result).toEqual(0);
  });

  it("findMinFibonacciNumbers(1)", () => {
    const result = findMinFibonacciNumbers(1);
    expect(result).toEqual(1);
  });

  it("findMinFibonacciNumbers(2)", () => {
    const result = findMinFibonacciNumbers(2);
    expect(result).toEqual(1);
  });

  it("findMinFibonacciNumbers(5)", () => {
    const result = findMinFibonacciNumbers(5);
    expect(result).toEqual(1);
  });

  it("findMinFibonacciNumbers(10)", () => {
    const result = findMinFibonacciNumbers(10);
    expect(result).toEqual(2);
  });

  it("findMinFibonacciNumbers(20)", () => {
    const result = findMinFibonacciNumbers(20);
    expect(result).toEqual(3);
  });

  it("findMinFibonacciNumbers(30)", () => {
    const result = findMinFibonacciNumbers(30);
    expect(result).toEqual(3);
  });
});
