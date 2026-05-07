class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // intuition
  // there are k linked-list
  // 1-2-3-4
  // 2-3
  // 4
  // 5-9-10

  // how to merge them altogether?
  // we have to merge one by one

  // bruteforce

  // merge list 1 with list 2 to become listResult
  // 1-2-2-3-3-4

  // then merge listResult with list3
  // 1-2-2-3-3-4-4
  // then merge with list 4

  // this means we go each list of K and then iterate over N items in list. k*n

  // we can optimize this with merging 2 at same time

  // merge list 1 and 2 to listResult
  // 1-2-3-4
  // 2-3

  // merge list 3 and 4 to list result
  // 4
  // 5-9-10

  // then merge first merged with second merged,

  // effectively we halving number of list to merge every iteration

  // we have approach that allow log(k) list merges * n items



  // edge case check

  if (!lists || lists.length === 0) return null


  while (lists.length > 1) {
    let mergedList = []

    // 1 pass to merge 2 lists, but its not entirely merged into one yet
    // we will do passes until we left with 1 list only
    for (let i = 0; i < lists.length; i += 2) {

      let list1 = lists[i]
      let list2 = i + 1 < lists.length ? lists[i + 1] : null

      mergedList.push(mergeTwoList(list1, list2))
    }

    lists = mergedList
  }

  return lists[0]

  function mergeTwoList(list1, list2) {
    // [1,2,3,4,5]
    //      ^
    // [2,3]
    //      ^

    //   Dum->1->2->2->3->3->4->5
    //  ^           ^

    let dummy = new ListNode()
    let twoListResultTail = dummy

    while (list1 && list2) {
      if (list1.val < list2.val) {
        twoListResultTail.next = list1
        list1 = list1.next
      } else {
        twoListResultTail.next = list2
        list2 = list2.next
      }

      twoListResultTail = twoListResultTail.next // prepare tail for next iteration
    }


    twoListResultTail.next = list1 || list2


    return dummy.next

  }

};

export { mergeKLists };
