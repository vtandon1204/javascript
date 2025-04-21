const arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(arr[0]);

// Note: JavaScipt arrays are resizebale and can contain mix of different data types

// JavaScript arrays - copy operation makes shaloow copies (copy whose properties share the same reference as those of source object)

// *********************** Array Methods *************************

// 1. push() - adds one or more elements to the end of an array and returns the new length of the array
const arr1 = [1,2,3];
arr1.push(4,5);
console.log(arr1); // [1, 2, 3, 4, 5]

// 2. pop() - removes the last element from an array and returns that element. This method changes the length of the array.
const arr2 = [1,2,3,4,5];
arr2.pop(); // removes 5
console.log(arr2); // [1, 2, 3, 4]

// 3. shift() - removes the first element from an array and returns that element. This method changes the length of the array.
const arr3 = [1,2,3,4,5];
arr3.shift(); // removes 1
console.log(arr3); // [2, 3, 4, 5]

// 4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
const arr4 = [1,2,3,4,5];
arr4.unshift(0); // adds 0 to the beginning
console.log(arr4); // [0, 1, 2, 3, 4, 5]

// 5. concat() - used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr5 = [1,2,3];
const arr6 = [4,5,6];
const arr7 = arr5.concat(arr6); // merges arr5 and arr6
console.log(arr7); // [1, 2, 3, 4, 5, 6]

// 6. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arr8 = [1,2,3,4,5];
console.log(arr8.includes(3)); // true
console.log(arr8.includes(6)); // false

// 7. join() - joins all elements of an array into a string. The elements will be separated by a specified separator. The default separator is comma (,).
const arr9 = [1,2,3,4,5];
console.log(arr9.join()); // "1,2,3,4,5"
console.log(arr9.join('-')); // "1-2-3-4-5"
console.log(arr9.join('')); // "12345"

// 8. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const arr10 = [1,2,3,4,5];
console.log(arr10.slice(1, 3)); // [2, 3]
console.log(arr10.slice(2)); // [3, 4, 5]
console.log(arr10.slice(-2)); // [4, 5]
console.log(arr10.slice(-3, -1)); // [3, 4]
console.log(arr10.slice(1, -1)); // [2, 3, 4]
console.log(arr10.slice(0, 0)); // [] - empty array
console.log(arr10.slice(0, 5)); // [1, 2, 3, 4, 5]
console.log(arr10.slice(0, 6)); // [1, 2, 3, 4, 5] - out of bounds
console.log(arr10.slice(0, -6)); // [] - empty array


// 9. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
const arr11 = [1,2,3,4,5];
arr11.splice(2, 1); // removes 1 element at index 2 (3)
console.log(arr11); // [1, 2, 4, 5]
const arr12 = [1,2,3,4,5];
arr12.splice(2, 0, 3); // adds 3 at index 2
console.log(arr12); // [1, 2, 3, 3, 4, 5]