// stack
var removeDuplicateLetters = function (s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 如果栈中存在，则跳过
    if (stack.includes(char)) continue;

    // 如果栈顶元素大于char且后续字符串存在此元素，则删除栈顶元素，直至栈顶元素小于char或者栈为空停止
    while (
      stack.length &&
      stack[stack.length - 1] > char &&
      s.includes(stack[stack.length - 1], i)
    ) {
      stack.pop();
    }

    stack.push(char);
  }

  return stack.join("");
};
