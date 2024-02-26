//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; //Number is not int float or double every number is number

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined datatype

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["happy", "henry", "likes", "beans"];
let myObj = {
  name: "vanshika",
  age: 23,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof userEmail);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof outsideTemp); // null is object datatype(important point)

//function is called function object other than that, object and array is called object
