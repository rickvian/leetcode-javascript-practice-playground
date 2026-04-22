import { bulbSwitch } from '../0319-bulb-switcher.js';

describe('0319-bulb-switcher', () => {
  it("bulbSwitch(121)", () => {
    const result = bulbSwitch(121);
    expect(result).toEqual(11);
  });

  it("bulbSwitch(10)", () => {
    const result = bulbSwitch(10);
    expect(result).toEqual(3);
  });

  it("bulbSwitch(0)", () => {
    const result = bulbSwitch(0);
    expect(result).toEqual(0);
  });

  it("bulbSwitch(1534236469)", () => {
    const result = bulbSwitch(1534236469);
    expect(result).toEqual(39169);
  });
});
