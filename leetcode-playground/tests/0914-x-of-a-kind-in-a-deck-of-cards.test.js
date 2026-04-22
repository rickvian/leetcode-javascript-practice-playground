import { hasGroupsSizeX } from '../0914-x-of-a-kind-in-a-deck-of-cards.js';

describe('0914-x-of-a-kind-in-a-deck-of-cards', () => {
  it("hasGroupsSizeX([1, 2, 3, 4, 5])", () => {
    const result = hasGroupsSizeX([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("hasGroupsSizeX([1])", () => {
    const result = hasGroupsSizeX([1]);
    expect(result).toEqual(false);
  });

  it("hasGroupsSizeX([1, 1])", () => {
    const result = hasGroupsSizeX([1, 1]);
    expect(result).toEqual(true);
  });

  it("hasGroupsSizeX([3, 1, 4, 1, 5])", () => {
    const result = hasGroupsSizeX([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("hasGroupsSizeX([-1, 0, 1])", () => {
    const result = hasGroupsSizeX([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
