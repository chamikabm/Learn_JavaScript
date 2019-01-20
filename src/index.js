function foo () {
  console.log("Simple function call");
  console.log(this === global);
}

foo();	//prints true on console
console.log(this === global) //Prints true on console.
