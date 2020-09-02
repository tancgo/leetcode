class MinHeap {
    constructor() {
        this.heap = [];
    }

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
        // console.log(this.heap)
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);

        if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);

        // 左右比对比的先后顺序不同，最终的最小堆树也会不同
        if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
        if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    // 删除堆顶并返回
    pop() {
        if (this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);

        return top;
    }

    peak() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var mergeKLists = function (lists) {
    const res = new ListNode(0);
    let pointer = res;
    const heap = new MinHeap();

    lists.forEach(item => {
        // 把链表当成heap的一个节点
        if (item) heap.insert(item);
    })

    while (heap.size()) {
        const node = heap.pop();
        pointer.next = node;
        pointer = pointer.next;
        if (node.next) heap.insert(node.next);
    }

    return res.next;
};