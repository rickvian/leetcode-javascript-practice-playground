import { poorPigs } from '../0458-poor-pigs.js';

describe('0458-poor-pigs', () => {
  it("poorPigs([1, 2, 3])", () => {
    const result = poorPigs([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("poorPigs([])", () => {
    const result = poorPigs([]);
    expect(result).toEqual(0);
  });

  it("poorPigs([0])", () => {
    const result = poorPigs([0]);
    expect(result).toEqual(0);
  });

  it("poorPigs([-1, 0, 1])", () => {
    const result = poorPigs([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
