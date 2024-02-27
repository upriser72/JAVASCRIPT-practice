let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())

console.log(typeof mydate) //object

let myCreatedDate = new Date(2023, 0, 23) 
 //MONTH STARTS FROM 0 IN JS THAT IS JANUARY IS 0 NOT 1

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
