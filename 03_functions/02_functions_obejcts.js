function calculatePrice(val1, val2, ...num1) {
  // rest parameter
  return num1;
}
console.log(calculatePrice(5, 10, 15, 20, 25)); // [15, 20, 25]

const user = {
  name: "vaibhav",
  age: 22,
};

function handleObject(obj) {
  console.log(`Username: ${obj.name}`); // prints the name of the object
  console.log(`Age: ${obj.age}`); // prints the age of the object
}

handleObject(user); // prints the object
handleObject({ name: "vaibhav", age: 22, isStudent: true }); // prints the object

const arr = [1, 2, 3, 4, 5];

function handleArray(arr) {
  console.log(arr); // prints the array
  console.log(arr.length); // prints the length of the array
  console.log(arr[0]); // prints the first element of the array
  console.log(arr[arr.length - 1]); // prints the last element of the array
}

handleArray(arr); // prints the array
handleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); // prints the array
