var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let n = 10 ** Math.floor(Math.log10(x));

  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false;
    x = Math.floor((x % n) / 10);
    n /= 100;
  }

  return true;
};
