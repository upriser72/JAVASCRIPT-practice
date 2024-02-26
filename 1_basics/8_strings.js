const name = "vanshika"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//This method is called STRING INTERPOLATION

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// the function toUpperCase() can be applied easily using string interpolation

const gameName = new String('this-is-a-new-string')
/*
This is another way of declaring strings where String object is used and string value is
 passed as the constructor of that object

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/
 console.log(gameName[0]);  //t
 console.log(gameName.__proto__); // {}


console.log(gameName.length);  //length of string
console.log(gameName.toUpperCase()); // string in upper case
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, -3)
console.log(anotherString);

const newStringOne = "   apple   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://en.wikipedia.org/wiki/Wiki"

console.log(url.replace('.org', '.mine'))

console.log(url.includes('sundar'))
console.log(url.includes('wiki'))

console.log(gameName.split('-'));