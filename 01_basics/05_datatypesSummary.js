// Primitive --> call by value
// 7 types: string, number, bigint, boolean, symbol, undefined, null

const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2); // false


// Reference (Non-primitive) --> call by reference
// object, array, function

const names = ['John', 'Jane'];
console.log(names);
console.log(typeof names);

let myObj = {
    name: 'vt',
    age: 23
}
console.log(myObj);
console.log(typeof myObj);

let myFunc = function() {
    console.log('Hello');
}
myFunc();
console.log(typeof myFunc);