/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
// var reverseList = function(head) {
//    let prev = null;
//    // 当前输入节点
//    let cur = head;

//   while (cur) {
//     //   let temp = cur.next;
//     //    cur.next = prev;
//     //    prev = cur;
//     //    cur = temp;

//        [cur.next, prev, cur] = [prev, cur, cur.next]
//   }

//   return prev
// };

// 递归
var reverseList = function (head) {
  if (!head || !head.next) return head

  let newHead = reverseList(head.next);

  head.next.next = head; // 当head为1时 head.next 为2 ,  2.next = 1 , 完成反转
  head.next = null; // 将1.next 指为null

  return newHead
};