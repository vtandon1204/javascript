// singleton
// object constructor

// object constructor
const obj2 = new Object(); // singleton object constructor

// const obj2 = {}; // non-singleton object constructor
obj2.name = "vaibhav";
obj2.age = 22;
obj2.isStudent = true;
obj2.hobbies = ["coding", "gaming"];
obj2.address = new Object();
obj2.address.city = "pune";
obj2.address.state = "maharashtra";
obj2.fullName = new Object();
obj2.fullName.firstName = "vaibhav";
obj2.fullName.lastName = "tandon";
obj2.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(obj2); // prints the object

const obj3 = new Object({1: 'a', 2: 'b'}); // singleton object constructor
const obj4 = new Object({3: 'a', 4: 'b'});

// const obj5 = {obj3, obj4};
const obj5 = Object.assign({}, obj3, obj4); // object constructor
console.log(obj5);

const obj6 = {...obj3, ...obj4}; // spread operator
console.log(obj6); // {1: 'a', 2: 'b', 3: 'a', 4: 'b'}
 

console.log(Object.keys(obj2)); // prints the keys of the object
console.log(Object.values(obj2)); // prints the values of the object
console.log(Object.entries(obj2)); // prints the entries of the object

console.log(obj2.hasOwnProperty("name")); // prints true if the object has the property
console.log(obj2.hasOwnProperty("email")); // prints false if the object does not has the property


