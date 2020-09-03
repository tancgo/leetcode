Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }
    [this[i], this[minIndex]] = [this[minIndex], this[i]];
    console.log(this);
  }
};

const arr = [5,4,3,2,1];

arr.selectionSort();
