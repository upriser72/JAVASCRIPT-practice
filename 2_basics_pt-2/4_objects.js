//OBJECT USING CONSTRUCTOR  (SINGLETON)
// const tinderUser = new Object()   //singleton object
const tinderUser = {}               // non singleton object
console.log(tinderUser)

//defining object inside an object (NESTING)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  /retrieving values of nested objects




