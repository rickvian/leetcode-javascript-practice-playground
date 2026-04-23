import { invalidTransactions } from '../1169-invalid-transactions.js';

describe('1169-invalid-transactions', () => {
  it("invalidTransactions([\"flower\", \"flow\", \"flight\"])", () => {
    const result = invalidTransactions(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("invalidTransactions([\"a\", \"b\", \"c\"])", () => {
    const result = invalidTransactions(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("invalidTransactions([])", () => {
    const result = invalidTransactions([]);
    expect(result).toEqual([]);
  });

  it("invalidTransactions([\"\"])", () => {
    const result = invalidTransactions([""]);
    expect(result).toEqual([]);
  });

  it("invalidTransactions([\"ab\", \"a\", \"abc\"])", () => {
    const result = invalidTransactions(["ab", "a", "abc"]);
    expect(result).toEqual([]);
  });
});
