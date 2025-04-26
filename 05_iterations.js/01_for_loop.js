// for loop

for(let i = 0; i < 10; i++){
    console.log(i);
}

// for loop with nested for loop
for(let i = 1; i <= 3; i++){
    console.log(`Outer: ${i}`);
    for(let j = 1; j <= 5; j++){
        console.log(`Inner: ${j} | Outer: ${i}`);
    }
}

// for loop with break statement
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

// for loop with continue statement
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

