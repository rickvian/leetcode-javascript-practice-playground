import { superEggDrop } from '../0887-super-egg-drop.js';

describe('0887-super-egg-drop', () => {
  it("superEggDrop(1, 1)", () => {
    const result = superEggDrop(1, 1);
    expect(result).toEqual(1);
  });

  it("superEggDrop(0, 0)", () => {
    const result = superEggDrop(0, 0);
    expect(result).toEqual(0);
  });

  it("superEggDrop(3, 7)", () => {
    const result = superEggDrop(3, 7);
    expect(result).toEqual(3);
  });

  it("superEggDrop(100, 1000)", () => {
    const result = superEggDrop(100, 1000);
    expect(result).toEqual(10);
  });
});
