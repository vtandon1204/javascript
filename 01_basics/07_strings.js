const name = 'vaibhav';
const repoCnt = 100;

// console.log(name + repoCnt + " Value"); // out-dated syntax
console.log(`${name} has ${repoCnt} repositories`); // vaibhav has 100 repositories
// because `` has a special meaning in JS, it is used to create template literals --> string interpolation

const gameName = new String('PUBG');

console.log(gameName[0]); // P
console.log(gameName.length); // 4
console.log(gameName.toLowerCase()); // pubg
console.log(gameName.__proto__); // String {}
console.log(gameName.charAt(0)); // P
console.log(gameName.charCodeAt(0)); // 80
console.log(gameName.indexOf('B')); // 1
console.log(gameName.lastIndexOf('G')); // 3

const gameName2 = gameName.substring(0, 2); // 0 to 2 (not including 2)
console.log(gameName2);

const gameName3 = gameName.slice(-2,4); // -2 to 4 (not including 4) --> -2 means 2nd last character to 4th character
console.log(gameName3);

const gameName4 = "    vasu   ";
console.log(gameName4.trim()); // removes leading and trailing whitespaces

const url = "https://www.vaibhav%20tandon.com";
console.log(url.replace('%20','_')); // https://www.vaibhav_tandon.com
console.log(url.includes('vaibhav')); // true

console.log(url.split('/')); // [ 'https:', '', 'www.vaibhav%20tandon.com' ]