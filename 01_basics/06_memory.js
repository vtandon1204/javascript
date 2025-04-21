// Stack Memory
// - Primitive data types are stored in stack memory

let myName = 'vt';
let anotherName = myName;
anotherName = 'vt2';

console.log(myName); // vt
console.log(anotherName); // vt2


// Heap Memory
// - Reference data types are stored in heap memory

let user1 = {
    email: 'vt@gmail.com',
    upi: 'vt@upi'
}

let user2 = user1;
user2.email = 'rt@gmail.com';

console.log(user1.email); // rt@gmail.com
console.log(user2.email); // rt@gmail.com
