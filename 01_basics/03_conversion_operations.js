let score = "33abc";
console.log(score);
console.log(typeof score); // string

let valInScore = Number(score);
console.log(valInScore); // NaN (Not a Number)
console.log(typeof valInScore); // number

// **************************************************

let num = null;
console.log(num);
console.log(typeof num); // object

let valInNumber = Number(num);
console.log(valInNumber); // 0
console.log(typeof valInNumber); // number

// **************************************************

let und = undefined;
console.log(und);
console.log(typeof und); // undefined

let valInUnd = Number(und);
console.log(valInUnd); // NaN (Not a Number)
console.log(typeof valInUnd); // number

// **************************************************

let bool = true;
console.log(bool);
console.log(typeof bool); // boolean

let valInBool = Number(bool);
console.log(valInBool); // 1
console.log(typeof valInBool); // number

// **************************************************

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1, false -> 0

// **************************************************

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

// **************************************************

// 0 -> false
// 1 -> true
// "" -> false
// "abc" -> true
// null -> false
// undefined -> false
// NaN -> false

// **************************************************

let someNumber = 32;
let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber); // "32"
console.log(typeof stringSomeNumber); // string

// **************************************************

// ***************** Operations *****************

let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);

// **************************************************

console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(6 / 2); // 3
console.log(2 % 3); // 2 % 3 = 2
console.log(2 ** 3); // 2^3 = 8
 
// **************************************************

let str1 = "Hello";
let str2 = " World";

let str3 = str1 + str2;
console.log(str3);

// **************************************************

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log(1 + 2); // 3
console.log("1" + "2"); // "12"
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "2"); // "32"

// **************************************************

console.log(true); // true
console.log(+true); // 1
console.log(-true); // -1
console.log(!true); // false

