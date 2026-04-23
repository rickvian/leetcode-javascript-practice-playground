import { numberOfWays } from '../1259-handshakes-that-dont-cross.js';

describe('1259-handshakes-that-dont-cross', () => {
  it("numberOfWays(10)", () => {
    const result = numberOfWays(10);
    expect(result).toEqual(42);
  });

  it("numberOfWays(0)", () => {
    const result = numberOfWays(0);
    expect(result).toEqual(1);
  });
});
