import { predictPartyVictory } from '../0649-dota2-senate.js';

describe('0649-dota2-senate', () => {
  it("predictPartyVictory(\"abcabcbb\")", () => {
    const result = predictPartyVictory("abcabcbb");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\"bbbbb\")", () => {
    const result = predictPartyVictory("bbbbb");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\"pwwkew\")", () => {
    const result = predictPartyVictory("pwwkew");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\"\")", () => {
    const result = predictPartyVictory("");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\" \")", () => {
    const result = predictPartyVictory(" ");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\"a\")", () => {
    const result = predictPartyVictory("a");
    expect(result).toEqual("Dire");
  });

  it("predictPartyVictory(\"aaaaaa\")", () => {
    const result = predictPartyVictory("aaaaaa");
    expect(result).toEqual("Dire");
  });
});
