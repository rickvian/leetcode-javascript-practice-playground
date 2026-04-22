import { calculate } from '../0772-basic-calculator-iii.js';

describe('0772-basic-calculator-iii', () => {
  it("calculate(\"abcabcbb\")", () => {
    const result = calculate("abcabcbb");
    expect(result).toEqual(0);
  });

  it("calculate(\"bbbbb\")", () => {
    const result = calculate("bbbbb");
    expect(result).toEqual(0);
  });

  it("calculate(\"pwwkew\")", () => {
    const result = calculate("pwwkew");
    expect(result).toEqual(0);
  });

  it("calculate(\"\")", () => {
    const result = calculate("");
    expect(result).toEqual(0);
  });

  it("calculate(\" \")", () => {
    const result = calculate(" ");
    expect(result).toEqual(0);
  });

  it("calculate(\"a\")", () => {
    const result = calculate("a");
    expect(result).toEqual(0);
  });

  it("calculate(\"aaaaaa\")", () => {
    const result = calculate("aaaaaa");
    expect(result).toEqual(0);
  });
});
