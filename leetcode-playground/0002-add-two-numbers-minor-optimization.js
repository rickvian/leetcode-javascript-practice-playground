let dummyHead = new ListNode();
let current = dummyHead; // the result linkedList, dummy will be the head we return later when finished.
let carry = 0;

// 1. Process both lists while they both have nodes
while (l1 !== null && l2 !== null) {
  let sum = l1.val + l2.val + carry;
  if (sum >= 10) {
    carry = 1;
    sum -= 10;
  } else {
    carry = 0;
  }
  current.next = new ListNode(sum); // build new node for the sum
  current = current.next; // move the pointer to prepare next iteration

  // proceed next sums.
  l1 = l1.next;
  l2 = l2.next;
}

// 2.  in case one is longer than other, Handle the remaining part of the longer list
let remaining = l1 || l2;
while (remaining !== null) {
  let sum = remaining.val + carry; // carry could come from previous loop

  // it could potentially bigger than 10  due to carry
  if (sum >= 10) {
    carry = 1;
    sum -= 10;
  } else {
    carry = 0;
  }
  current.next = new ListNode(sum);
  current = current.next;
  remaining = remaining.next; // moving next pointer on whichever list that longer
}

// 3. Final carry check , case like 99 + 1 will have carry even thou all list are processed
if (carry > 0) {
  current.next = new ListNode(carry);
}

return dummyHead.next;
