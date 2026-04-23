import { dieSimulator } from '../1223-dice-roll-simulation.js';

describe('1223-dice-roll-simulation', () => {
  it("dieSimulator(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = dieSimulator(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(30);
  });

  it("dieSimulator(2, [2, 1])", () => {
    const result = dieSimulator(2, [2, 1]);
    expect(result).toEqual(11);
  });

  it("dieSimulator(1, [1, 2, 3])", () => {
    const result = dieSimulator(1, [1, 2, 3]);
    expect(result).toEqual(6);
  });

  it("dieSimulator(3, [1, 2, 3, 4, 5])", () => {
    const result = dieSimulator(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(139);
  });

  it("dieSimulator(1, [7, 6, 4, 3, 1])", () => {
    const result = dieSimulator(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(6);
  });
});
