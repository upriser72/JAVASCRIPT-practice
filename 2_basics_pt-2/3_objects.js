/*
singleton(only one instance of its kind)
If object is made by literal then its never a singleton.
If object is made by constructor then its always singleton.
*/

// object literals

const mySym = Symbol("key1")   // defining a symbol datatype 
//keys are taken as string by default
const JsUser = {
    name: "apple",
    "full name": "kirti sinha",
    [mySym]: "mykey1",  // this is how a symbol is passed/defined in an object 
                        //if no square braces are used,mySym is taken as a string not a symbol
    age: 18,
    location: "Jaipur",
    email: "something@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)  //this approach doesn't work for object keys declared as "full name"
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //better approach
// console.log(JsUser[mySym])

JsUser.email = "apple@chatgpt.com"  //changing the value of a key in object
// Object.freeze(JsUser)   //for locking the values of the object
JsUser.email = "bunny@microsoft.com"  //changing value of email again
// console.log(JsUser); 
//this time the value of email is apple@chatgpt.com only because object was freezed 

//defining function under object 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //using this keyword || using string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
