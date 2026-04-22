import { accountsMerge } from '../0721-accounts-merge.js';

describe('0721-accounts-merge', () => {
  it("accountsMerge([])", () => {
    const result = accountsMerge([]);
    expect(result).toEqual([]);
  });
});
