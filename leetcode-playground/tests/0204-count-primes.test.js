import { countPrimes } from '../0204-count-primes.js';

describe('0204-count-primes', () => {
  it("countPrimes(0)", () => {
    const result = countPrimes(0);
    expect(result).toEqual(0);
  });

  it("countPrimes(1)", () => {
    const result = countPrimes(1);
    expect(result).toEqual(0);
  });

  it("countPrimes(2)", () => {
    const result = countPrimes(2);
    expect(result).toEqual(0);
  });

  it("countPrimes(10)", () => {
    const result = countPrimes(10);
    expect(result).toEqual(4);
  });

  it("countPrimes(100)", () => {
    const result = countPrimes(100);
    expect(result).toEqual(25);
  });

  it("countPrimes(1000)", () => {
    const result = countPrimes(1000);
    expect(result).toEqual(168);
  });
});
