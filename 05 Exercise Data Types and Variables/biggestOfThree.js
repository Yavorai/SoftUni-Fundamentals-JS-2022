function demo(num1, num2, num3) {
  let result = Number.MIN_SAFE_INTEGER;
  if (num1 > result) {
    result = num1;
  }
  if (num2 > result) {
    result = num2;
  }
  if (num3 > result) {
    result = num3;
  }
  console.log(result);
}
demo(-2, 7, 3);
demo(130, 5, 99);
demo(43, 43.2, 43.1);

//====================================
function demo(a, b, c) {
    let big = Math.max(a, b, c);
    console.log(big);
}
//=====================================
function demo(a, b, c) {
    let biggest;
    if (a >= b && a >= c) {
        biggest = a;
    } else if (b >= a && b >= c) {
        biggest = b;
    } else {
        biggest = c;
    }
    console.log(biggest);
}