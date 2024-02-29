/*
singleton(only one instance of its kind)
If object is made by literal then its never a singleton.
If object is made by constructor then its always singleton.
*/

// object literals


//keys are taken as string by default
const JsUser = {
    name: "apple",
    "full name": "kirti sinha",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "something@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
