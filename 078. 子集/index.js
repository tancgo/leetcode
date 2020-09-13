// 库函数法
/**
 * nums = [1,2,3] 时, 执行过程如下
 *[ [] ]
  [ [], [ 1 ] ]
  [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]
  [ [], [ 1 ], [ 2 ], [ 1, 2 ], [3], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
 */
var subsets = function (nums) {
  return nums.reduce(
    (acc, num) => acc.concat(acc.map((item) => item.concat(num))),
    [[]]
  );
};

// 不用reduce库函数版本
var subsets = function (nums) {
  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    res = res.concat(res.map((item) => item.concat(nums[i])));
  }

  return res;
};
