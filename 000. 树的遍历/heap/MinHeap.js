class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 获取父级，左右子节点的index存在如下规律
  /**
   *
   *      0
   *   1      2
   * 3   4  5   6
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
    }
    this.shiftUp(parentIndex);
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    // 左右比对比的先后顺序不同，最终的最小堆树也会不同
    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }

    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    // 删除尾部元素，并将将尾部元素赋给堆顶元素
    this.heap[0] = this.heap.pop();
    // 将尾部元素向后比较
    this.shiftDown(0);
  }

  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(1);
h.insert(3);
h.insert(5);
h.insert(4);
h.insert(8);
h.insert(7);
h.insert(6);
h.pop();
console.log(h);
