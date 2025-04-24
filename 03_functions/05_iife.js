// Immediately Invoked Function Expression (IIFE)

function func() {
  console.log("DB CONNECTED");
}
func(); // DB CONNECTED

// IIFE is a function that is executed immediately after it is defined
// IIFE is used to create a new scope and avoid polluting the global scope
// IIFE is used to create a private scope for variables and functions

(function func2() { // named IIFE
  console.log("DB CONNECTED"); // DB CONNECTED
})();

(() => {
  console.log("DB CONNECTED TWO"); // DB CONNECTED
})();

((name) => {
  console.log(`DB CONNECTED ${name}`); // DB CONNECTED
})("vaibhav");
