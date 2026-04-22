import { depthSum } from '../0339-nested-list-weight-sum.js';

describe('0339-nested-list-weight-sum', () => {
  it("depthSum([])", () => {
    const result = depthSum([]);
    expect(result).toEqual(0);
  });
});
