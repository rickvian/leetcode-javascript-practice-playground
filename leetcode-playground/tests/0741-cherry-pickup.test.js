import { cherryPickup } from '../0741-cherry-pickup.js';

describe('0741-cherry-pickup', () => {
  it("cherryPickup([[1, 2], [3, 4]])", () => {
    const result = cherryPickup([[1, 2], [3, 4]]);
    expect(result).toEqual(10);
  });

  it("cherryPickup([[1]])", () => {
    const result = cherryPickup([[1]]);
    expect(result).toEqual(1);
  });

  it("cherryPickup([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = cherryPickup([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(42);
  });
});
