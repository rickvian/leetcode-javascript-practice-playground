import { BSTIterator } from '../0173-binary-search-tree-iterator.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0173-binary-search-tree-iterator', () => {
  it("sequence 1", () => {
    const obj = new BSTIterator(arrayToTree([4, 2, 7, 1, 3]));
    expect(obj.hasNext()).toBeTruthy();
    expect(obj.next()).toEqual(1);
    expect(obj.hasNext()).toEqual(2);
    expect(obj.next()).toEqual(2);
    expect(obj.hasNext()).toBeTruthy();
    expect(obj.next()).toEqual(3);
  });

  it("sequence 2", () => {
    const obj = new BSTIterator(arrayToTree([3, 1, 2]));
    expect(obj.hasNext()).toBeTruthy();
    expect(obj.next()).toEqual(1);
    expect(obj.next()).toEqual(3);
    expect(obj.hasNext()).toBeTruthy();
  });

  it("sequence 3", () => {
    const obj = new BSTIterator(arrayToTree([7]));
    expect(obj.hasNext()).toBeTruthy();
    expect(obj.next()).toEqual(7);
    expect(obj.hasNext()).toEqual(0);
  });
});
