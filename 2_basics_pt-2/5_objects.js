//DESTRUCTURING OF OBJECTS

const course = {
    coursename: "js fun",
    price: "999",
    courseInstructor: "dumbledore"
}

// course.courseInstructor  //long syntax to use multiple times

//const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course //gave an easy name
console.log(instructor);



//JSON USED FOR API CALLS

//JSON format as object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  
//     "price": "free"
// }


//JSON format as array
// [
//     {},
//     {},
//     {}
// ]

//use JSON FORMATTER for understanding JSON codes