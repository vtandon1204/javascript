// 2 ways to declare an object -> object literal and object constructor

// object literals
// object literal is a comma-separated list of key-value pairs enclosed in curly braces

const mySym = Symbol("key1"); // symbol is a primitive data type and is used to create unique keys for objects
const obj1 = {
  name: "vaibhav",
  //   mySym: "myKey1", // symbol key, but still not used as a symbol
  [mySym]: "myKey1", // symbol key, used as a symbol
  age: 22,
  isStudent: true,
  hobbies: ["coding", "gaming"],
  address: {
    city: "pune",
    state: "maharashtra",
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
console.log(obj1); // prints the object

console.log(obj1.name);
console.log(obj1.age);
console.log(obj1["name"]); // using bracket notation, "name" is a string
console.log(obj1["age"]); // using bracket notation, "age" is a string
console.log(obj1.mySym); // using bracket notation, "mySym" is a string here
console.log(typeof obj1.mySym);
console.log(obj1[mySym]); // using bracket notation, "mySym" is a symbol here
console.log(typeof obj1[mySym]); // using bracket notation, "mySym" is a symbol here

// object constructor
const obj2 = new Object();
obj2.name = "vaibhav";
obj2.age = 22;
obj2.isStudent = true;
obj2.hobbies = ["coding", "gaming"];
obj2.address = new Object();
obj2.address.city = "pune";
obj2.address.state = "maharashtra";
obj2.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// singleton
