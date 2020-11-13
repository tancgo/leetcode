// 递归法
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  // 获取第二个节点
  const next = head.next;

  // 第一个节点指向第三个节点
  head.next = swapPairs(next.next);

  // 第二个节点的next指向第一个节点
  next.next = head;

  // 返回next  因为此时next节点已经变为头部节点
  return next;
};

// 迭代法 时间复杂度O(n) 空间复杂度O(1)
var swapPairs = function (head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    // 获取第二个节点
    const next = head.next;

    // 第一个节点指向第三个节点
    head.next = next.next;

    // 第二个节点的next指向第一个节点
    next.next = head;

    // 更新prev
    prev.next = next;

    // 指针更新, 这个时候head已经在dummy的第三个节点上了
    prev = head;
    // 更新head进入下一个循环
    head = head.next;
  }

  return dummy.next;
};
