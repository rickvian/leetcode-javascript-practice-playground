import { addOperators } from '../0282-expression-add-operators.js';

describe('0282-expression-add-operators', () => {
  it("addOperators(\"abcdef\", 2)", () => {
    const result = addOperators("abcdef", 2);
    expect(result).toEqual([]);
  });

  it("addOperators(\"\", 1)", () => {
    const result = addOperators("", 1);
    expect(result).toEqual([]);
  });

  it("addOperators(\"a\", 1)", () => {
    const result = addOperators("a", 1);
    expect(result).toEqual([]);
  });

  it("addOperators(\"abba\", 3)", () => {
    const result = addOperators("abba", 3);
    expect(result).toEqual([]);
  });

  it("addOperators(\"  hello  \", 2)", () => {
    const result = addOperators("  hello  ", 2);
    expect(result).toEqual([]);
  });
});
