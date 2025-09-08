function zero(op) {
  return op ? op(0) : 0;
}
function one(op) {
  return op ? op(1) : 1;
}
function two(op) {
  return op ? op(2) : 2;
}
function three(op) {
  return op ? op(3) : 3;
}
function four(op) {
  return op ? op(4) : 4;
}
function five(op) {
  return op ? op(5) : 5;
}
function six(op) {
  return op ? op(6) : 6;
}
function seven(op) {
  return op ? op(7) : 7;
}
function eight(op) {
  return op ? op(8) : 8;
}
function nine(op) {
  return op ? op(9) : 9;
}

function plus(right) {
  return function (left) {
    return left + right;
  };
}

function minus(right) {
  return function (left) {
    return left - right;
  };
}

function times(right) {
  return function (left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function (left) {
    return Math.floor(left / right); // or just left / right
  };
}

console.log(seven(times(five()))); //  must return 35
console.log(four(plus(nine()))); //  must return 13
console.log(eight(minus(three()))); //  must return 5
console.log(six(dividedBy(two()))); //  must return 3
console.log(eight(dividedBy(three()))); // must return 2 not 2.2

console.log(times(five())); // Outputs 35
