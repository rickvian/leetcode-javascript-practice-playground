import { CBTInserter } from '../0919-complete-binary-tree-inserter.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0919-complete-binary-tree-inserter', () => {
  it("sequence 1", () => {
    const obj = new CBTInserter(arrayToTree([1, 2]));
    expect(obj.insert(3)).toEqual(1);
    expect(obj.get_root()).toBeTruthy();
  });

  it("sequence 2", () => {
    const obj = new CBTInserter(arrayToTree([1, 2, 3, 4, 5, 6]));
    expect(obj.insert(7)).toEqual(3);
    expect(obj.get_root()).toBeTruthy();
  });

  it("sequence 3", () => {
    const obj = new CBTInserter(arrayToTree([1]));
    expect(obj.insert(2)).toEqual(1);
    expect(obj.insert(3)).toEqual(1);
    expect(obj.get_root()).toBeTruthy();
  });
});
