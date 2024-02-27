const score= 100
console.log(score)

const balance = new Number(100)//using  object 
console.log(balance) 
/*
  VARIOUS OPERATIONS ON NUMBER 
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
*/
console.log(balance.toString().length)
console.log(balance.toFixed(2))  // fixed to 2 decimal places

const some= 187.7463
console.log(some.toPrecision(3)) //188
console.log(some.toPrecision(4)) //187.7
console.log(some.toPrecision(2)) //1.9e+2
console.log(some.toPrecision(5)) //187.75
//values got rounded off to precision number
// RETURN TYPE IS STRING

const num= 10000000
console.log(num.toLocaleString()) //10,000,000 gives US standard
console.log(num.toLocaleString('en-IN')) //1,00,00,000 gives Indian standard 

//++++++++++++++++MATHS+++++++++++++++

console.log(Math) //Object [Math] {} Math is an object
console.log(Math.abs(-3))
