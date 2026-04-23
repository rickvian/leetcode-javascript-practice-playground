import { distributeCoins } from '../0979-distribute-coins-in-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0979-distribute-coins-in-binary-tree', () => {
  it("distributeCoins([3, 9, 20, null, null, 15, 7])", () => {
    const result = distributeCoins(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(67);
  });

  it("distributeCoins([1])", () => {
    const result = distributeCoins(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("distributeCoins([])", () => {
    const result = distributeCoins(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("distributeCoins([1, 2, 3, 4, 5])", () => {
    const result = distributeCoins(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(17);
  });

  it("distributeCoins([1, null, 2, 3])", () => {
    const result = distributeCoins(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(5);
  });

  it("distributeCoins([1, 2])", () => {
    const result = distributeCoins(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
