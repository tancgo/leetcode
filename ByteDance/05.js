// 输入数字， 用0打印放大版数字，例如123
class LazyArray {
  constructor(arr) {
    this.arr = arr;
  }

  filter(fn) {
    const temp = this.arr.filter(fn);
    return new LazyArray(temp);
  }

  map(fn) {
    const temp = [];

    for (const n of this.arr) {
      const p = Promise.resolve(() => fn(n));
      temp.push(p);
    }

    return new LazyArray(temp);
  }

  forEach(fn) {
    Promise.all(this.arr).then((results) => {
      for (const f of results) {
        fn(f());
      }
    });
  }

  delay(wait) {
    const temp = [];

    for (const promise of this.arr) {
      const p = Promise.resolve(promise.then(f => () => setTimeout(f, wait)))
      temp.push(p)
    }

    return new LazyArray(temp);
  }
}
const lazy1 = new LazyArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const lazy2 = lazy1
  .filter((v) => v % 2 === 0)
  .map((v) => {
    console.log(`map ${v} to ${v * 5}`);

    return v * 5;
  });

// lazy2.forEach((v) => {
//   console.log("consume lazy2", v);
// });

const lazy3 = lazy2.delay(5000);

lazy3.forEach((v) => {
  console.log("consume lazy3", v);
});
// console.log(lazy1, "lazy1");
