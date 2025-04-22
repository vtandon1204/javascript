// Object Desructuring

const course = {
  name: "JavaScript",
  price: 999,
  duration: 30,
  isFree: false,
  topics: ["HTML", "CSS", "JavaScript"],
  instructor: {
    name: "John Doe",
    age: 35,
    experience: 10,
  },
};

const { name, price, duration, isFree, topics, instructor } = course; // object destructuring

const {
  name: courseName,
  price: coursePrice,
  duration: courseDuration,
  isFree: courseIsFree,
  topics: courseTopics,
  instructor: courseInstructor,
} = course; // object destructuring with renaming

console.log(courseName); // prints the name of the course
console.log(coursePrice); // prints the price of the course 


// JavaScript Object Notation - JSON API

// {
//     "name": "vaibhav",
//     "age": 35,
//     "isStudent": false,
//     "hobbies": ["coding", "gaming"],
//     "address": {
//         "city": "pune",
//         "state": "maharashtra"
//     },
//     "fullName": {
//         "firstName": "vaibhav",
//         "lastName": "tandon"
//     }
// };

// sometimes the api is in form of array of objects
// [
//     {},
//     {},
//     {}
// ]