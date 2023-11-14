const accountId = 132456
let accountEmail = "kavita@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"                               // KtNotes: This works, but bad practice to declare a variable 
let accountState;                                   // KtNotes: This will print value as 'undefined' 

// accountId = 3 
/* KtNotes: This is not allowed bcz earlier this variable was defined as constant type, hence TypeError.
Hence commenting 
*/

console.log(accountId)

/*
KtNotes: Prefer not to use var because of issue in block scope & functional scope. Always use let to declare variables
*/
accountEmail = "kt@gmail.com"   // console.log(accountEmail);
accountPassword = "334"         // console.log(accountPassword);
accountCity = "Ghaziabad"       // console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])