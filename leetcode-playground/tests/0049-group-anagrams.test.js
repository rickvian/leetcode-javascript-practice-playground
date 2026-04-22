import { groupAnagrams } from '../0049-group-anagrams.js';

describe('0049-group-anagrams', () => {
  it("groupAnagrams([\"flower\", \"flow\", \"flight\"])", () => {
    const result = groupAnagrams(["flower", "flow", "flight"]);
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([["flight"], ["flow"], ["flower"]]);
  });

  it("groupAnagrams([\"a\", \"b\", \"c\"])", () => {
    const result = groupAnagrams(["a", "b", "c"]);
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([["a"], ["b"], ["c"]]);
  });

  it("groupAnagrams([])", () => {
    const result = groupAnagrams([]);
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([]);
  });

  it("groupAnagrams([\"\"])", () => {
    const result = groupAnagrams([""]);
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[""]]);
  });

  it("groupAnagrams([\"ab\", \"a\", \"abc\"])", () => {
    const result = groupAnagrams(["ab", "a", "abc"]);
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([["a"], ["ab"], ["abc"]]);
  });
});
