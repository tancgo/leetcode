/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const stack = [];

  for (const i in s) {
    const k = s[i];

    if (map.has(k)) {
      stack.push(k);
    } else {
      const peak = stack.pop();

      if (k !== map.get(peak)) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

console.log(isValid("([)]"));
