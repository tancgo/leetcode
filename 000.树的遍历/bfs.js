const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        { val: "d", children: [] },
        { val: "e", children: [] },
      ],
    },
    {
      val: "c",
      children: [
        { val: "f", children: [] },
        { val: "g", children: [] },
      ],
    },
  ],
};

const bfs = (root) => {
  const queue = [root];
  
  while (queue.length) {
    const front = queue.shift();
    console.log(front.val);
    front.children.forEach(child => {
      queue.push(child)
    })
  }
}

bfs(tree);