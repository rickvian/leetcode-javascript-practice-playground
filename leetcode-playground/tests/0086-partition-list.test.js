import { ListNode, partition } from "../0086-partition-list";

function arrayToList(arr) {
  if (!arr || arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("0086-partition-list", () => {
  it("official example 1: [1,4,3,2,5,2] x=3 → [1,2,2,4,3,5]", () => {
    const head = arrayToList([1, 4, 3, 2, 5, 2]);
    const result = partition(head, 3);
    if (result !== undefined)
      expect(listToArray(result)).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it("official example 2: [2,1] x=2 → [1,2]", () => {
    const head = arrayToList([2, 1]);
    const result = partition(head, 2);
    if (result !== undefined) expect(listToArray(result)).toEqual([1, 2]);
  });

  it("empty list returns null", () => {
    const result = partition(null, 3);
    if (result !== undefined) expect(result).toBeNull();
  });

  it("single node less than x remains unchanged", () => {
    const head = arrayToList([1]);
    const result = partition(head, 2);
    if (result !== undefined) expect(listToArray(result)).toEqual([1]);
  });

  it("single node greater than or equal to x remains unchanged", () => {
    const head = arrayToList([3]);
    const result = partition(head, 2);
    if (result !== undefined) expect(listToArray(result)).toEqual([3]);
  });

  it("all elements less than x: order preserved, no change", () => {
    const head = arrayToList([1, 2, 3]);
    const result = partition(head, 5);
    if (result !== undefined) expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it("all elements greater than or equal to x: order preserved, no change", () => {
    const head = arrayToList([5, 6, 7]);
    const result = partition(head, 3);
    if (result !== undefined) expect(listToArray(result)).toEqual([5, 6, 7]);
  });

  it("x smaller than all elements: all go to second partition", () => {
    const head = arrayToList([5, 6, 7]);
    const result = partition(head, 1);
    if (result !== undefined) expect(listToArray(result)).toEqual([5, 6, 7]);
  });

  it("elements equal to x go to second partition", () => {
    const head = arrayToList([3, 1, 3, 2, 3]);
    const result = partition(head, 3);
    if (result !== undefined)
      expect(listToArray(result)).toEqual([1, 2, 3, 3, 3]);
  });

  it("relative order preserved in both partitions", () => {
    const head = arrayToList([3, 1, 4, 1, 5, 9, 2, 6]);
    const result = partition(head, 4);
    if (result !== undefined)
      expect(listToArray(result)).toEqual([3, 1, 1, 2, 4, 5, 9, 6]);
  });

  it("two nodes: first >= x, second < x", () => {
    const head = arrayToList([5, 1]);
    const result = partition(head, 3);
    if (result !== undefined) expect(listToArray(result)).toEqual([1, 5]);
  });

  it("negative values: partition correctly around x=0", () => {
    const head = arrayToList([-1, -2, 3, 2, -3]);
    const result = partition(head, 0);
    if (result !== undefined)
      expect(listToArray(result)).toEqual([-1, -2, -3, 3, 2]);
  });
});
