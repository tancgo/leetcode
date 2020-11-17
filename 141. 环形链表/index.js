var hasCycle = function (head) {
  const map = new Map();

  while (head !== null) {
    if (map.has(head.next)) return true;

    map.set(head.next, 1);
    head = head.next;
  }

  return false;
};

// 面试要求O1复杂度  采用快慢指针的解法  慢指针每次走一步 快指针每次走两步 如果有环  快慢指针终将会相遇
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    if (fast.next === null) return false;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
