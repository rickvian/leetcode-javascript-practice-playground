import { hasValidPath } from '../1391-check-if-there-is-a-valid-path-in-a-grid.js';

describe('1391-check-if-there-is-a-valid-path-in-a-grid', () => {
  it("hasValidPath([[1, 2], [3, 4]])", () => {
    const result = hasValidPath([[1, 2], [3, 4]]);
    expect(result).toEqual(false);
  });

  it("hasValidPath([[1]])", () => {
    const result = hasValidPath([[1]]);
    expect(result).toEqual(true);
  });

  it("hasValidPath([[]])", () => {
    const result = hasValidPath([[]]);
    expect(result).toEqual(false);
  });

  it("hasValidPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = hasValidPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
