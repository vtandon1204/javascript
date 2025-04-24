// if statement
const temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature < 15) {
  console.log("It's a cold day!");
} else {
  console.log("It's a pleasant day!");
}

// comparison operators (==, ===, !=, !==, >, <, >=, <=)

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
// ReferenceError: power is not defined (because power is defined in the if block and is not accessible outside the block)

// ternary operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Welcome back!

// nested if else
const score1 = 200;
if (score > 100) {
  console.log("High score!");
  if (score > 200) {
    console.log("Super high score!");
  } else {
    console.log("High score but not super high!");
  }
}

// logical operators (&&, ||, !)
const isLoggedIn1 = true;
const isEmailVerified = true;
const hasPaymentMethod = true;

const loggedInGoogle = false;
const loggedInEmail = true;

if (isLoggedIn1 && isEmailVerified && hasPaymentMethod) {
  console.log("Access granted!");
} else {
  console.log("Access denied!");
}

if (loggedInGoogle || loggedInEmail) {
  console.log("Logged in with Google or Email!");
}

// switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  case "Saturday":
    console.log("It's Saturday!");
    break;
  case "Sunday":
    console.log("It's Sunday!");
    break;
  default:
    console.log("Invalid day!");
    break;
}

// Truthy and Falsy values
// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: "0", 'false', " ", [], {}, function(){}

// |
// ->
const userEmail1 = ""; // falsy value
const userEmail2 = "vaibhav@gmail.com"; // truthy value

if (userEmail1) {
  console.log("User email is valid!");
} else {
  console.log("User email is invalid!"); // User email is invalid!
}
if (userEmail2) {
  console.log("User email is valid!"); // User email is valid!
} else {
  console.log("User email is invalid!");
}

const email = [];
if (email.length === 0) {
  console.log("Array is empty!");
}

const object = {};
if (Object.keys(object).length === 0) {
  console.log("Object is empty!");
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish Coalescing Operator (??): null undefined
// it returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand
// it is used to provide a default value for a variable if it is null or undefined 

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 10;
console.log(val1);
console.log(val2);
console.log(val3);
