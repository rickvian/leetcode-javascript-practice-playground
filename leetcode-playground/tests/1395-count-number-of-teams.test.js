import { numTeams } from '../1395-count-number-of-teams.js';

describe('1395-count-number-of-teams', () => {
  it("numTeams([1, 2, 3, 4, 5])", () => {
    const result = numTeams([1, 2, 3, 4, 5]);
    expect(result).toEqual(10);
  });

  it("numTeams([])", () => {
    const result = numTeams([]);
    expect(result).toEqual(0);
  });

  it("numTeams([1])", () => {
    const result = numTeams([1]);
    expect(result).toEqual(0);
  });

  it("numTeams([1, 1])", () => {
    const result = numTeams([1, 1]);
    expect(result).toEqual(0);
  });

  it("numTeams([3, 1, 4, 1, 5])", () => {
    const result = numTeams([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("numTeams([-1, 0, 1])", () => {
    const result = numTeams([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
