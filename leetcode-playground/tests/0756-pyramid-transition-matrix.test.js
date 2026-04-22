import { pyramidTransition } from '../0756-pyramid-transition-matrix.js';

describe('0756-pyramid-transition-matrix', () => {
  it("pyramidTransition(\"BCD\", [\"BCC\", \"CDE\", \"CEA\", \"FFF\"])", () => {
    const result = pyramidTransition("BCD", ["BCC", "CDE", "CEA", "FFF"]);
    expect(result).toEqual(true);
  });

  it("pyramidTransition(\"AABA\", [\"AAA\", \"AAB\", \"ABA\", \"ABB\", \"BAC\"])", () => {
    const result = pyramidTransition("AABA", ["AAA", "AAB", "ABA", "ABB", "BAC"]);
    expect(result).toEqual(false);
  });

  it("pyramidTransition(\"A\", [\"AAA\"])", () => {
    const result = pyramidTransition("A", ["AAA"]);
    expect(result).toEqual(true);
  });

  it("pyramidTransition(\"AB\", [\"AAA\", \"AAB\", \"ABC\"])", () => {
    const result = pyramidTransition("AB", ["AAA", "AAB", "ABC"]);
    expect(result).toEqual(true);
  });

  it("pyramidTransition(\"ABC\", [\"ABC\", \"ABD\", \"ABE\"])", () => {
    const result = pyramidTransition("ABC", ["ABC", "ABD", "ABE"]);
    expect(result).toEqual(false);
  });
});
