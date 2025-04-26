// while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// do while loop with break statement
let k = 0;
do {
  console.log(k);
  k++;
  if (k === 5) {
    break;
  }
} while (k < 10);

// do while loop with continue statement
let l = 0;
do {
  console.log(l);
  l++;
  if (l === 5) {
    continue;
  }
} while (l < 10);
