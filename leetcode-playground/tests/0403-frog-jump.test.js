import { canCross } from '../0403-frog-jump.js';

describe('0403-frog-jump', () => {
  it("canCross([-1, 0, 1])", () => {
    const result = canCross([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
