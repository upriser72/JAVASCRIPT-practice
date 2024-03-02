let mydate = new Date()
console.log(mydate)
//console.log(mydate.toString())
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


let myTimeStamp = Date.now()

// console.log(myTimeStamp);    //gives output in milliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //date in ms converted to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    //press ctrl+space for various parameters of this object
    weekday: "long",
    
})
