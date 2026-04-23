import { toHexspeak } from '../1271-hexspeak.js';

describe('1271-hexspeak', () => {
  it("toHexspeak(\"\")", () => {
    const result = toHexspeak("");
    expect(result).toEqual("O");
  });

  it("toHexspeak(\" \")", () => {
    const result = toHexspeak(" ");
    expect(result).toEqual("O");
  });
});
