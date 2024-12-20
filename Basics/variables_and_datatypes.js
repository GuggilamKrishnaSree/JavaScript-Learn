const accountId = 145345
let accountEmail = "account@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

console.log(accountId)// 145345
console.table([accountId,accountEmail,accountPassword,accountCity])
// ┌─────────┬─────────────────────┐
// │ (index) │ Values              │
// ├─────────┼─────────────────────┤
// │ 0       │ 145345              │
// │ 1       │ 'account@gmail.com' │
// │ 2       │ '12345'             │
// │ 3       │ 'Jaipur'             │
// └─────────┴─────────────────────┘

// accountId = 3 --> not allowed

accountEmail = "acc@gmail.com"
accountPassword = "asdf4"
accountCity = "Bangalore"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 145345          │
// │ 1       │ 'acc@gmail.com' │
// │ 2       │ 'asdf4'         │
// │ 3       │ 'Bangalore'     │
// │ 4       │ undefined       │
// └─────────┴─────────────────┘

/*
Prefer not to use var
because of issue in block scope and functional scope. 
*/

/*
Read the article
https://www.geeksforgeeks.org/what-happen-when-we-directly-assign-the-variable-without-declaring-it-in-javascript/
*/

//alert(3+3)---------->doesn't work here because we are using nodejs, not browser
//tc39 and mdn docs


//datatypes
//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => variable declared but not assigned any value.
//symbol => to talk about uniqueness

//object

//use typeof to check the datatype of a variable
// console.log(typeof accountEmail) ---> string
// console.log(typeof null) ---> object
// console.log(typeof undefined) ---> undefined
