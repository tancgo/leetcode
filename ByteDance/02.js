/**
 *
 * 给定一组硬币的面额，以及要找零的钱数，计算出符合找零钱数的最少硬币数量。
 * 例如，美国硬币面额有1、5、10、25这四种面额，如果要找36美分的零钱，则得出的最少硬币数应该是1个25美分、1个10美分和1个1美分共三个硬币
 *
 */

const coins = [1, 5, 10, 25];

class MiniCoinChange {
  constructor(coins) {
    this.coins = coins;
  }
  makeChange(n) {
    let res = [];

    const dfs = (target, temp, begin) => {
      if (target < 0) return;

      if (target === 0) {
        // 比较temp的长度， 如果长度小于已有长度(res为[]时设置为Infinity)时更新res，
        if (temp.length < (res.length || Infinity)) {
          res = temp.slice();
        }
      }

      for (let i = begin; i < this.coins.length; i++) {
        const cur = this.coins[i];
        temp.push(cur);

        dfs(target - cur, temp, i);

        temp.pop();
      }
    };

    dfs(n, [], 0);

    return res;
  }
}

const miniCoinChange = new MiniCoinChange(coins);
console.log(miniCoinChange.makeChange(36));

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = {};
  let min = Infinity;

  const dfs = (target, temp, id) => {
    if (id === candidates.length) return;

    // console.log(temp, 'ans')
    if (target === 0) {
      // console.log(temp)
      res[temp.length] = temp;
      min = Math.min(min, temp.length);
      return;
    }

    // console.log(target, temp, candidates[id + 1], 'a')
    dfs(target, temp, id + 1);

    target -= candidates[id];

    if (target >= 0) {
      // console.log(target, [...temp, candidates[id]], candidates[id], 'b')
      dfs(target, [...temp, candidates[id]], id);
    }
  };

  dfs(target, [], 0);

  return res[min];
};

// console.log(combinationSum([1, 5, 10, 25], 36));
