const graph = require("./graph");

const visited = new Set();
const queue = [1];

while (queue.length) {
  const node = queue.shift();
  console.log(node);
  
  visited.add(node);
  graph[node].forEach(item => {
    if(!visited.has(item)) {
      queue.push(item);
    }
  })
}