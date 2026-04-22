import { tree2str } from '../0606-construct-string-from-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0606-construct-string-from-binary-tree', () => {
  it("tree2str([3, 9, 20, null, null, 15, 7])", () => {
    const result = tree2str(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual("3(9)(20(15)(7))");
  });

  it("tree2str([1])", () => {
    const result = tree2str(arrayToTree([1]));
    expect(result).toEqual("1");
  });

  it("tree2str([])", () => {
    const result = tree2str(arrayToTree([]));
    expect(result).toEqual("");
  });

  it("tree2str([1, 2, 3, 4, 5])", () => {
    const result = tree2str(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual("1(2(4)(5))(3)");
  });

  it("tree2str([1, null, 2, 3])", () => {
    const result = tree2str(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual("1()(2(3))");
  });

  it("tree2str([1, 2])", () => {
    const result = tree2str(arrayToTree([1, 2]));
    expect(result).toEqual("1(2)");
  });
});
