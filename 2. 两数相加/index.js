/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;

  while (p1 || p2) {
      const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      p3.next = new ListNode(sum % 10);
      if (p1) p1 = p1.next;
      if (p2) p2 = p2.next;
      p3 = p3.next;
  }

  if (carry) { p3.next = new ListNode(carry) }

  return l3.next;
};