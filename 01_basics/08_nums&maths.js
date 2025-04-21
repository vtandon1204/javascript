const num1 = 10;
console.log(num1); // 10

const num2 = new Number(20);
console.log(num2); // [Number: 20]

console.log(num2.toString()); // 20
console.log(num2.toString(2)); // 10100 --> binary
console.log(num2.toString(8)); // 24 --> octal
console.log(num2.toString(10)); // 20 --> decimal
console.log(num2.toFixed(3));

const num3 = 23.263463;
console.log(num3.toPrecision(3)); // 23.3
// Number of significant digits must be in the range 1 - 21, inclusive.

const hundreds = 100000000;
console.log(hundreds.toExponential()); // 1e+8
console.log(hundreds.toLocaleString("en-IN")); // 10,00,00,000
console.log(hundreds.toLocaleString("en-US")); // 100,000,000
console.log(
  hundreds.toLocaleString("en-IN", { style: "currency", currency: "INR" })
); // ₹1,00,00,000.00
console.log(
  hundreds.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // $100,000,000.00
console.log(
  hundreds.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  })
); // ₹1,00,00,000.00

// *************** Maths *********************

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.round(2.4)); // 2
console.log(Math.ceil(2.4)); // 3
console.log(Math.floor(2.4)); // 2
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-3)); // 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(2, 3, 4, 5)); // 2
console.log(Math.max(2, 3, 4, 5)); // 5

console.log(Math.random()); // value between 0 and 1
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
