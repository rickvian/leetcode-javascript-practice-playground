import { subdomainVisits } from '../0811-subdomain-visit-count.js';

describe('0811-subdomain-visit-count', () => {
  it("subdomainVisits([])", () => {
    const result = subdomainVisits([]);
    expect(result).toEqual([]);
  });
});
