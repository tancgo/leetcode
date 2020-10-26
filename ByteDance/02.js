/**
 *
 * 给定一组硬币的面额，以及要找零的钱数，计算出符合找零钱数的最少硬币数量。
 * 例如，美国硬币面额有1、5、10、25这四种面额，如果要找36美分的零钱，则得出的最少硬币数应该是1个25美分、1个10美分和1个1美分共三个硬币
 *
 */

const coins = [1, 5, 10, 25];

class MiniCoinChange {
  constructor(conis) {
    this.conis = conis;
  }
  makeChange(n) {
  }
}

const miniCoinChange = new MiniCoinChange(coins);
console.log(miniCoinChange.makeChange(36));
