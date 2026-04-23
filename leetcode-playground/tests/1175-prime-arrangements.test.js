import { numPrimeArrangements } from '../1175-prime-arrangements.js';

describe('1175-prime-arrangements', () => {
  it("numPrimeArrangements(1)", () => {
    const result = numPrimeArrangements(1);
    expect(result).toEqual(1);
  });

  it("numPrimeArrangements(2)", () => {
    const result = numPrimeArrangements(2);
    expect(result).toEqual(1);
  });

  it("numPrimeArrangements(3)", () => {
    const result = numPrimeArrangements(3);
    expect(result).toEqual(2);
  });

  it("numPrimeArrangements(5)", () => {
    const result = numPrimeArrangements(5);
    expect(result).toEqual(12);
  });

  it("numPrimeArrangements(10)", () => {
    const result = numPrimeArrangements(10);
    expect(result).toEqual(17280);
  });

  it("numPrimeArrangements(100)", () => {
    const result = numPrimeArrangements(100);
    expect(result).toEqual(682289015);
  });
});
