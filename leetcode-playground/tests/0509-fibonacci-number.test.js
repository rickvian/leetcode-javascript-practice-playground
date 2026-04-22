import { fib } from '../0509-fibonacci-number.js';

describe('0509-fibonacci-number', () => {
  it("fib(0)", () => {
    const result = fib(0);
    expect(result).toEqual(0);
  });

  it("fib(1)", () => {
    const result = fib(1);
    expect(result).toEqual(1);
  });

  it("fib(2)", () => {
    const result = fib(2);
    expect(result).toEqual(1);
  });

  it("fib(5)", () => {
    const result = fib(5);
    expect(result).toEqual(5);
  });

  it("fib(10)", () => {
    const result = fib(10);
    expect(result).toEqual(55);
  });

  it("fib(20)", () => {
    const result = fib(20);
    expect(result).toEqual(6765);
  });

  it("fib(30)", () => {
    const result = fib(30);
    expect(result).toEqual(832040);
  });
});
