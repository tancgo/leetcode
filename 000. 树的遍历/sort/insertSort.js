Array.prototype.insertSort = function () {
  for (let i = 1; i < this.length; i++) {
    let j = i; // 从第二个数开始往前比

    while (j > 0) {
      if (this[j - 1] > this[j]) {
        [this[j - 1], this[j]] = [this[j], this[j - 1]];
      } else break;
      j--;
    }
    console.log(this);
  }
};

const arr = [5, 8, 11, 1, 78, 9, 2];

arr.insertSort();
