import { findRotateSteps } from '../0514-freedom-trail.js';

describe('0514-freedom-trail', () => {
  it("findRotateSteps(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = findRotateSteps("ADOBECODEBANC", "ABC");
    expect(result).toEqual(8);
  });

  it("findRotateSteps(\"a\", \"a\")", () => {
    const result = findRotateSteps("a", "a");
    expect(result).toEqual(1);
  });

  it("findRotateSteps(\"a\", \"aa\")", () => {
    const result = findRotateSteps("a", "aa");
    expect(result).toEqual(2);
  });
});
