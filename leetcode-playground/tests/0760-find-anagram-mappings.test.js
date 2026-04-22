import { anagramMappings } from '../0760-find-anagram-mappings.js';

describe('0760-find-anagram-mappings', () => {
  it("anagramMappings([1], [1])", () => {
    const result = anagramMappings([1], [1]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([0]);
  });
});
