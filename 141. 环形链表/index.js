var hasCycle = function (head) {
  const map = new Map()

  while (head !== null) {
    if (map.has(head.next)) return true

    map.set(head.next, 1)
    head = head.next
  }

  return false
};  