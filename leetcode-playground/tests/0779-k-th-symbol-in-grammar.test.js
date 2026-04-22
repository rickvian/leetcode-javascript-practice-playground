import { kthGrammar } from '../0779-k-th-symbol-in-grammar.js';

describe('0779-k-th-symbol-in-grammar', () => {
  it("kthGrammar(1, 1)", () => {
    const result = kthGrammar(1, 1);
    expect(result).toEqual(0);
  });

  it("kthGrammar(3, 7)", () => {
    const result = kthGrammar(3, 7);
    expect(result).toEqual(0);
  });

  it("kthGrammar(100, 1000)", () => {
    const result = kthGrammar(100, 1000);
    expect(result).toEqual(1);
  });
});
