function sayName(name) {
  console.log(`Hello, ${name}!`);
}

sayName("Vaibhav"); // Hello, Vaibhav!

function add(a, b) {
  // here a and b are parameters
  return a + b;
}
console.log(add(5, 10)); // 15 // here 5 and 10 are arguments
console.log(add(5)); // NaN (not a number) because b is undefined
console.log(add(3, null)); // 3
console.log(add(5, 10, 15)); // 15 (only first two arguments are considered)

function loginUserMessage(userName) {
  if (userName === undefined) {
    return "Please enter your name!";
  }
  return `Welcome ${userName}!`;
}
console.log(loginUserMessage("vaibhav"))
// console.log(loginUserMessage()) // undefined