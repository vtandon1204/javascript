console.log("2" > 1); // true (string is converted to number)
console.log("02" > 1); // true (string is converted to number)
console.log("2" == 2); // true (string is converted to number)
console.log("2" === 2); // false (strict check, no conversion)

console.log(null == 0); // false (null is not equal to 0)
console.log(null < 0); // false (null is not less than 0)
console.log(null <= 0); // true (null is less than or equal to 0)

console.log(undefined == 0); // false (undefined is not equal to 0)

// strict check (===) is always better than loose check (==)

console.log(null === 0); // false
console.log(null === undefined); // false
console.log(null == undefined); // true

