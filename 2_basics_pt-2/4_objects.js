//OBJECT USING CONSTRUCTOR  (SINGLETON)
// const tinderUser = new Object()   //singleton object
const tinderUser = {}               // non singleton object
console.log(tinderUser)

//defining object inside an object (NESTING)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "amitabh",
            lastname: "bacchan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  /retrieving values of nested objects
console.log(regularUser.fullname?.userfullname.firstname);
// using question mark to cherck if fullname exists


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //returns object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
//takes empty {} object as target and fills values of all the other source objects in it
//hence helps in combining various objects

const obj3 = {...obj1, ...obj2} //using spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   //index used for selecting object 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //gives array of all keys in tinderUser
// console.log(Object.values(tinderUser)); //gives array of all values in tinderUser
// console.log(Object.entries(tinderUser));  //gives separate arrays of key and value
                                             //[key1,val1] [key2,val2]......







