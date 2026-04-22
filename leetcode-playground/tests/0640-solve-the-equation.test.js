import { solveEquation } from '../0640-solve-the-equation.js';

describe('0640-solve-the-equation', () => {
  it("solveEquation(\"x+5-3+x=6+x-2\")", () => {
    const result = solveEquation("x+5-3+x=6+x-2");
    expect(result).toEqual("x=2");
  });

  it("solveEquation(\"x=x\")", () => {
    const result = solveEquation("x=x");
    expect(result).toEqual("Infinite solutions");
  });

  it("solveEquation(\"2x=x\")", () => {
    const result = solveEquation("2x=x");
    expect(result).toEqual("x=0");
  });

  it("solveEquation(\"0x=0\")", () => {
    const result = solveEquation("0x=0");
    expect(result).toEqual("Infinite solutions");
  });

  it("solveEquation(\"x+1=2\")", () => {
    const result = solveEquation("x+1=2");
    expect(result).toEqual("x=1");
  });

  it("solveEquation(\"2x+1=3\")", () => {
    const result = solveEquation("2x+1=3");
    expect(result).toEqual("x=1");
  });
});
