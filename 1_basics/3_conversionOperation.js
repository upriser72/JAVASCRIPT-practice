let  age =26
console.log(typeof age)
console.log(typeof(age))

let score="26"
console.log(typeof(score))

let valueInNumber = Number(score)     //conversion of string to number 
                                      // use capital Number not number
console.log(typeof(valueInNumber))

let newscore="26abc"     //have both number and chars
let newValueInNumber =Number(newscore)
console.log(typeof(newValueInNumber))   //returns number
console.log(newValueInNumber)   //returns NaN which means n26abc got converted to a number but not valid conversion

let next =null
let nextInNumber =Number(next)
console.log(nextInNumber)      //returns/prints 0

/*
conversion of undefined to number will give NaN
conversion of boolean true to number will give 1
conversion of boolean false to number wioll give 0
conversion of string like "vanshika" to number will give NaN
*/

let currState=1
let changedToBoolean =Boolean(currState)
console.log(changedToBoolean)      //number 1 got converted to boolean true

let newState=" "
let ToBoolean =Boolean(newState)
console.log(ToBoolean)   //non empty string converted to boolean true

let newState1=""
let ToBoolean1 =Boolean(newState1)
console.log(ToBoolean1)  //empty string converted to boolean false
