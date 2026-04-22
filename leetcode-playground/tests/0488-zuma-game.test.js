import { findMinStep } from '../0488-zuma-game.js';

describe('0488-zuma-game', () => {
  it("findMinStep(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = findMinStep("ADOBECODEBANC", "ABC");
    expect(result).toEqual(-1);
  });

  it("findMinStep(\"a\", \"a\")", () => {
    const result = findMinStep("a", "a");
    expect(result).toEqual(-1);
  });

  it("findMinStep(\"a\", \"aa\")", () => {
    const result = findMinStep("a", "aa");
    expect(result).toEqual(2);
  });

  it("findMinStep(\"\", \"A\")", () => {
    const result = findMinStep("", "A");
    expect(result).toEqual(0);
  });
});
