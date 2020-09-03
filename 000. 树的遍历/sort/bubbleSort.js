Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    // console.log(this[i]);
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this;
};

const arr = [5, 8, 11, 1, 78, 9, 2];

arr.bubbleSort();
