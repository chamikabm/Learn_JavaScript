function add(x, y) {
  return x + y;
}

add(1, 2); // returns 3

// Assigning a function reference as if it's a value
var addBorrowed = add;

addBorrowed(2, 3); // returns 5

////

function sayHi() {
  alert("Yay, I am going to master Closures!");
}
function doStuff(functionReference) {
  functionReference();
}

// Passing a funciton reference to another function.
// Please notice the absence of "()" after sayHi below.
doStuff(sayHi);

////
function getSayHiFunction() {
  return sayHi;
}
// Calling a funciton to get another function and then call it.
// Please notice "()()".
getSayHiFunction()();
