import { wordSubsets } from '../0916-word-subsets.js';

describe('0916-word-subsets', () => {
  it("wordSubsets([\"amazon\", \"apple\", \"facebook\", \"google\", \"leetcode\"], [\"e\", \"o\"])", () => {
    const result = wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["facebook", "google", "leetcode"]);
  });

  it("wordSubsets([\"amazon\", \"apple\", \"facebook\", \"google\", \"leetcode\"], [\"l\", \"e\"])", () => {
    const result = wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["apple", "google", "leetcode"]);
  });

  it("wordSubsets([\"a\", \"b\", \"c\"], [\"a\"])", () => {
    const result = wordSubsets(["a", "b", "c"], ["a"]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["a"]);
  });

  it("wordSubsets([\"amazon\"], [])", () => {
    const result = wordSubsets(["amazon"], []);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["amazon"]);
  });

  it("wordSubsets([\"warrior\", \"world\"], [\"wrr\"])", () => {
    const result = wordSubsets(["warrior", "world"], ["wrr"]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["warrior"]);
  });

  it("wordSubsets([\"wordgame\", \"game\"], [\"game\"])", () => {
    const result = wordSubsets(["wordgame", "game"], ["game"]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["game", "wordgame"]);
  });
});
