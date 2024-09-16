const accountId = 1
let accountEmail = "navneet@gmail.com"
var accountPassword = "12345"
accountCity = "Pratapgarh"

// accountId = 2 // not allowed
accountEmail = "raj@gmail.com"
accountPassword = "54321"
accountCity = "Lucknow"

console.table([accountId, accountEmail, accountPassword, accountCity]);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/