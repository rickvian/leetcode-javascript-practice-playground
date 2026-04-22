import { flipLights } from '../0672-bulb-switcher-ii.js';

describe('0672-bulb-switcher-ii', () => {
  it("flipLights(1, 1)", () => {
    const result = flipLights(1, 1);
    expect(result).toEqual(2);
  });

  it("flipLights(0, 0)", () => {
    const result = flipLights(0, 0);
    expect(result).toEqual(1);
  });

  it("flipLights(3, 7)", () => {
    const result = flipLights(3, 7);
    expect(result).toEqual(8);
  });

  it("flipLights(100, 1000)", () => {
    const result = flipLights(100, 1000);
    expect(result).toEqual(8);
  });
});
