var num = 15
var fn1 = function(x) {
  if (x>num) {
    console.log(x);
  }
}

void function (fn2) {
  var num = 100;
  fn2(20)
}(fn1)