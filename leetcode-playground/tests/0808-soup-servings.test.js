import { soupServings } from '../0808-soup-servings.js';

describe('0808-soup-servings', () => {
  it("soupServings(121)", () => {
    const result = soupServings(121);
    expect(result).toEqual(0.7421875);
  });

  it("soupServings(-121)", () => {
    const result = soupServings(-121);
    expect(result).toEqual(0.5);
  });

  it("soupServings(10)", () => {
    const result = soupServings(10);
    expect(result).toEqual(0.625);
  });

  it("soupServings(0)", () => {
    const result = soupServings(0);
    expect(result).toEqual(0.5);
  });

  it("soupServings(-1)", () => {
    const result = soupServings(-1);
    expect(result).toEqual(0.5);
  });

  it("soupServings(1534236469)", () => {
    const result = soupServings(1534236469);
    expect(result).toEqual(1);
  });
});
