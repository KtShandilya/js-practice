"use strict"; //treat all JS code as newer version

// alert("Admin Permission Required!")  // KtNotes: Program o/p gives error coz we are using node js & not browser here

console.log(3 
    +
    3) // KtNotes: Bad practice sample - Code readability should be high and proper. Must follow best practices

console.log("Kavita")


let name = "Kavita"
let age = 22
let isLoggedIn = true
let isLoggedOut = false

/*
========================================================================================================================
1. number => 2 to power 53 (This range of numbers are allowed in the memory address)
2. bigint (This is used for a very huge number which is mostly not required in general. 
        But in stock market/trading/ very big applications like reddit, facebook, it may also be used)
3. string => ""
4. boolean => true/false
5. null => a standalone value
6. undefined => value not assigned yet

========================================================================================================================
KtNotes: Difference b/w undefined & null:

* Undefined 

(means when you have not defined value:
 for eg: let stateName; // means variable declared but no value assigned to it
Then the o/p will be undefined)

* Null: 

It is a representation of an empty value where the type is not strictly defined as string or var etc
(Null is a special type which can be intentionally assigned. 
for eg: let stateName = null  //means we have given a null value which means it is not undefined, it is just empty
means if we send a request from a server to tell temperature but due to some problem, 
server ain't able to fetch value, then it cannot send 0 value, it will send null. means empty. 
means it represents that the value is empty and not fetched yet.)

Therefore, null is a standalone value & undefined means the value is not yet assigned.
========================================================================================================================

7. symbol => unique
========================================================================================================================
Details:
Symbol is very unique datatype which is implemented in react, when we create lots of components & need to identify a unique component. 
Then, to find that uniqueness, this symbol datatype helps a lot.
figma tools use symbols a lot
========================================================================================================================

8. object

*/

console.log(typeof "qwgwdwudui"); // o/p string
console.log(typeof age) // o/p number
console.log(typeof Kavita) // o/p undefined
console.log(typeof null) // o/p object
console.log(typeof undefined) // o/p undefined







