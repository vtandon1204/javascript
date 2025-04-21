const accountId = 12345;
let accountEmail = "vt@gmail.com"
var accountPassword = "1204"
accountCity = "Bangalore"
let accountState; // undefined

// accountId = 12 
// This will throw an error because we are trying to 
// reassign a value to a constant variable
console.log(accountId);

accountEmail = "rt@gmail.com"
accountPassword = "1234"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, 
                accountCity, accountState]);

/*
Prefer NOT to use var keyword
because of issue in block scope and functional scope
*/