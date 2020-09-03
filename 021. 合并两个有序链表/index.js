// 利用归并排序的思想
var mergeTwoLists = function (l1, l2) {
  const res = new ListNode(0);

  let p = l1; // 指针
  let q = l2; // 指针
  let r = res; // 指针

  while (p && q) {
    // console.log(p, 'p');
    // console.log(q, 'q');
    if (p.val < q.val) {
      r.next = p;
      p = p.next;
    } else {
      r.next = q;
      q = q.next;
    }

    r = r.next;
  }

  // if (p) {
  //   // console.log(p, 'ifp')
  //   r.next = p;
  // }
  // if (q) {
  //   // console.log(q, 'ifq')
  //   r.next = q;
  // }

  r.next = p || q;  // 上面注释部分的简化版

  return res.next;
};


// 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l2.next,l1);
      return l2
  }
};