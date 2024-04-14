const user = {  //using this keyword in object
    username: "chloe",
    price: 999,

    welcomeMessage: function() {  //welcomeMessageis a method here
        console.log(`${this.username} , welcome to website`);  //using this keyword for CURRENT CONTEXT 
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//In node environment this gives empty context {} when ran alone whereas in browser console gives a global object WINDOW

// function chai()  //using this keyword in a function
// {
//     let username = "harry"
//     console.log(this.username); //gives undefined 
//     console.log(this) //gives a lot of values present inside this
// }

// chai()

// const chai = function () {
//     let username = "harry"
//     console.log(this.username);  //similar result as above
// }


const chai =  () => { //using arrow function =>
    let username = "harry"
    console.log(this); //this CAN be used in arrow function
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2  //THIS IS CALLED IMPLICIT RETURN- no need of return statement

// const addTwo = (num1, num2) => ( num1 + num2 ) //parenthesis packs everything at once place

//const addTwo = (num1, num2) => {username: "rose"}  //EXPLICIT RETURN undefined (wrap in parenthesis)
const addTwo = (num1, num2) => ({username: "rose"}) //using parenthesis


console.log(addTwo(3, 4))

