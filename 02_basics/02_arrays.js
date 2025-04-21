const arr1 = ['vt','rt','st']
const arr2 = ['db','tb']

arr1.push(arr2) // ['vt', 'rt', 'st', ['db', 'tb']]
console.log(arr1) // ['vt', 'rt', 'st', ['db', 'tb']]
console.log(arr1[3]) // ['db', 'tb']
console.log(arr1[3][0]) // db
console.log(arr1[3][1]) // tb


const arr3 = ['vt','rt','st']
const arr4 = ['db','tb']

arr3.push(...arr4) // ['vt', 'rt', 'st', 'db', 'tb']
// spread operator
console.log(arr3) // ['vt', 'rt', 'st', 'db', 'tb']
console.log(arr3[3]) // db


const arr5 = ['vt','rt','st']
const arr6 = ['db','tb']

arr7 = arr5.concat(arr6) // ['vt', 'rt', 'st', 'db', 'tb']
// returns a new array
console.log(arr7) // ['vt', 'rt', 'st', 'db', 'tb']
console.log(arr5) // ['vt', 'rt', 'st']
console.log(arr6) // ['db', 'tb']


const arr8 = ['vt','rt','st']
const arr9 = ['db','tb']

const arr10 = [...arr8, ...arr9] // ['vt', 'rt', 'st', 'db', 'tb']
// spread operator


const arr11 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr12 = arr11.flat() // [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]
// flat() - flattens the array by one level
console.log(arr12) // [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]
const arr13 = arr11.flat(2) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// flat(2) - flattens the array by two levels
console.log(arr13) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
const arr14 = arr11.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] 
// flat(Infinity) - flattens the array by all levels
console.log(arr14) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray('vaibhav')) // false
console.log(Array.isArray([1,2,3])) // true

console.log(Array.from("vaibhav")) // ['v', 'a', 'i', 'b', 'h', 'a', 'v']
console.log(Array.from({name: 'vaibhav'})) // []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // [100, 200, 300];
