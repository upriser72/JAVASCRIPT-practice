let value =7
let negValue= -value
console.log(negValue) //returns negative of the given number

/*
various operations:
console.log(2+2)
           (2-2)
           (2*2)
           (2**3) =>gives 2 raised to the power 3
           (2/3)
           (2%3) =>gives modulus 
*/

//string concatenation
let str1 ="hello"
let str2=" vanshika"
let str3= str1 + str2
console.log(str3);

//some confusing cases:
console.log("1" + 2); //12
console.log( 1 + "2") //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2") //32
console.log(1 + 2) //3
console.log("1" + "2") //12

console.log(true) //true
console.log(+true); //1
console.log(+""); //0  append with empty string or false or 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //not a good approach


let gameCounter = 100
++gameCounter;  //understand precedence read the documentation
console.log(gameCounter);//101
gameCounter++
console.log(gameCounter)  //102 