const user = {
  username: "vaibhav",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
user.welcomeMessage(); // prints "vaibhav, welcome to website"

user.username = "rajesh";
user.welcomeMessage(); // print "rajesh, welcome to website"

console.log(this); // prints the global object (window in browser, global in node.js), empty object in strict mode

// this keyword refers to the object that is calling the function or method
// in this case, it refers to the user object
// this keyword is used to access the properties and methods of the object
// in this case, it is used to access the username property of the user object

// *********************************************************

function chai() {
  let username = "vaibhav";
  console.log(this.username); // undefined (because this refers to the global object and username is not defined in the global scope)
  console.log(this); // prints the global object (window in browser, global in node.js)
}
chai(); // prints the global object (window in browser, global in node.js)
// chai() is a function that is called in the global scope, so this refers to the global object

// **********************************************************

// Arrow functions do not have their own this keyword, they inherit this from the parent scope
// Arrow functions are not hoisted, so they cannot be called before they are defined

const func = () => {
  let username = "vaibhav";
  console.log(this.username); // undefined (because this refers to the global object and username is not defined in the global scope)
  console.log(this); // prints the global object (window in browser, global in node
};
func();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addTwoImplicit = (num1, num2) => (
    num1 + num2
);

console.log(addTwo(3, 4)); // 7
console.log(addTwoImplicit(4, 5)); // 9

const func2 = () => ({
    username: "vaibhav"
})
console.log(func2()); // { username: 'vaibhav' }