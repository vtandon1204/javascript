// ***** for of loop *****
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greeting = "Hello, World!";
for (const char of greeting) {
  console.log(char);
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("US", "USA");
map.set("FRC", "France");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Objects
const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  py: "python",
  java: "java",
};
for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}

// ***** for in loop *****
const obj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  py: "python",
  java: "java",
};
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

const arr2 = [1, 2, 3, 4, 5];
for (const key in arr2) {
  console.log(`${arr2[key]}`);
}

// ***** forEach loop *****
const arr1 = [1, 2, 3, 4, 5];

// normal function
arr1.forEach(function (num, index) {
  console.log(num, index);
});

// arrow function
arr1.forEach((num) => console.log(num));

// function expression
function printMe(num) {
  console.log(num);
}
arr1.forEach(printMe);

const arr3 = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

arr3.forEach((item) => {
  console.log(item.languageName, item.languageFileName);
});

arr4 = ["js", "python", "java", "c++"];
const values = arr4.forEach((item) => {
  console.log(item);
  return item;
});
console.log(values); // undefined, because forEach does not return anything
