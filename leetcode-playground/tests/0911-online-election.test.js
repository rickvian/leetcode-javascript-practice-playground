import { TopVotedCandidate } from '../0911-online-election.js';

describe('0911-online-election', () => {
  it("sequence 1", () => {
    const obj = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    expect(obj.q(3)).toEqual(0);
    expect(obj.q(12)).toEqual(1);
    expect(obj.q(25)).toEqual(1);
    expect(obj.q(15)).toEqual(0);
    expect(obj.q(24)).toEqual(0);
    expect(obj.q(8)).toEqual(1);
  });

  it("sequence 2", () => {
    const obj = new TopVotedCandidate([0, 1, 1, 0], [0, 5, 10, 15]);
    expect(obj.q(5)).toEqual(1);
    expect(obj.q(10)).toEqual(1);
    expect(obj.q(15)).toEqual(0);
  });

  it("sequence 3", () => {
    const obj = new TopVotedCandidate([0], [0]);
    expect(obj.q(0)).toEqual(0);
  });
});
