import { findContestMatch } from '../0544-output-contest-matches.js';

describe('0544-output-contest-matches', () => {
  it("findContestMatch(2)", () => {
    const result = findContestMatch(2);
    expect(result).toEqual("(1,2)");
  });

  it("findContestMatch(4)", () => {
    const result = findContestMatch(4);
    expect(result).toEqual("((1,4),(2,3))");
  });

  it("findContestMatch(8)", () => {
    const result = findContestMatch(8);
    expect(result).toEqual("(((1,8),(4,5)),((2,7),(3,6)))");
  });

  it("findContestMatch(16)", () => {
    const result = findContestMatch(16);
    expect(result).toEqual("((((1,16),(8,9)),((4,13),(5,12))),(((2,15),(7,10)),((3,14),(6,11))))");
  });
});
