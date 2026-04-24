import { rankTeams } from '../1366-rank-teams-by-votes.js';

describe('1366-rank-teams-by-votes', () => {
  it("rankTeams([\"\"])", () => {
    const result = rankTeams([""]);
    expect(result).toEqual("");
  });
});
