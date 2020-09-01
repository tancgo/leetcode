// 数组的sort方法
var findKthLargest = function (nums, k) {
  const arr = nums.sort((a, b) => b - a);
  // console.log(arr)
  return arr[k - 1];
};

// 最小堆排序
// 构造最小堆类
class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * 获取父级，左右子节点的index存在如下规律
   *      0
   *   1      2
   * 3   4  5   6
   */
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    // 左右比对比的先后顺序不同，最终的最小堆树也会不同
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  nums.forEach((item) => {
    heap.insert(item);

    if (heap.size() > k) {
      heap.pop();
    }
  });

  return heap.peak();
};
