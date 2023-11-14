let score = "82points"
// Two methods to check the type of score variable would be as below:

console.log(typeof score)  // method 1    // o/p will be string
console.log(typeof (score)) // method 2   // o/p will be string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)         // o/p will be number
console.log(valueInNumber)                // o/p will be NaN ; means not a string. Hence be cautious using the conversion; 
// KtNotes: IMPORTANT: Hence, due to this problem, DO NOT RELY BLINdly on JS for number converstions. This is the issue w/ JS lang. 
// & JS doesn't have strict check. That's why ppl use typescript etc

//  What will happen if value is null:

let score1 = null
console.log(typeof score1)
console.log(typeof (score1))
let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//  What will happen if value is undefined:

let score2 = undefined
console.log(typeof score2)
console.log(typeof (score2))
let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber2)
console.log(valueInNumber2)

//  What will happen if value is boolean:

let score3 = true
console.log(typeof score3)
console.log(typeof (score3))
let valueInNumber3 = Number(score3)

console.log(typeof valueInNumber3)
console.log(valueInNumber3)

//  What will happen if value is string:

let score4 = "Kavita"
console.log(typeof score4)
console.log(typeof (score4))
let valueInNumber4 = Number(score4)

console.log(typeof valueInNumber4)
console.log(valueInNumber4)

/* KtNotes:
"33" => 33
"33abcd" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* KtNotes:
 1 => true; 0 => false
  "" => false
 "Katie" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
