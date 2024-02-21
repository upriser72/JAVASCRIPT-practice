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