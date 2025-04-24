if (true) {
  // block scope
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// *********************************************************
for (let i = 0; i < 5; i++) {
  console.log(i); // prints 0 to 4
}
// console.log(i); // ReferenceError: i is not defined

// Note: the global scope is the window object in the browser and the global object in node.js

// *********************************************************

// Closure - a function that has access to the outer function's scope even after the outer function has returned
function outerFunction() {
  let outerVariable = "I am an outer variable!";
  function innerFunction() {
    console.log(outerVariable); // prints "I am an outer variable!"
  }
  return innerFunction;
}

outerFunction()(); // prints "I am an outer variable!"


// *********************************************************

function one() {
  const username = "vaibhav";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website) // ReferenceError: website is not defined
  two(); // prints "vaibhav"
  // console.log(username) // prints "vaibhav"
}

one(); // prints "vaibhav"
// console.log(username) // ReferenceError: username is not defined
// console.log(website) // ReferenceError: website is not defined
// two(); // ReferenceError: two is not defined

// *********************************************************

if(true){
  const username = "vaibhav"
  if(username === "vaibhav"){
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined

// *********************************************************

// Hoisting - a process in which the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// In JavaScript, function declarations are hoisted, but function expressions are not.
// This means that you can call a function before it is declared in the code, but you cannot do the same with a function expression.

function addOne(num){ // function declaration
  // function declaration - hoisted to the top of the scope
  return num + 1;
}

console.log(addOne(5)); // prints 6

const addTwo = function(num){ // function expression
  // function expression - not hoisted to the top of the scope
  return num + 2;
}

addTwo(5); // prints 7


