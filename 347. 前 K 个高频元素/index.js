// 时间复杂度不符合要求，sort的时间复杂度为O(nlog n)
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(item => {
        map.set(item, map.get(item) ? map.get(item) + 1 : 1);
    })

    // console.log(map)
    const arr = Array.from(map).sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map(item => item[0])
};

// 最小堆
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
        if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index);
        }
        this.shiftUp(parentIndex);
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);

        // 左右比对比的先后顺序不同，最终的最小堆树也会不同
        if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }

        if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
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
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(item => {
        map.set(item, map.get(item) ? map.get(item) + 1 : 1);
    })

    const heap = new MinHeap();
    map.forEach((value, key) => {
        // console.log({ value, key })
        heap.insert({ value, key });
        // console.log(heap);
        if (heap.size() > k) {
            heap.pop();
        }
    })
    // console.log(heap);
    return heap.heap.map(item => item.key);
};