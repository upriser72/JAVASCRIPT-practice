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

function chai()  //using this keyword in a function
{
    let username = "hitesh"
    console.log(this.username); //gives undefined 
    console.log(this) //gives a lot of values present inside this
}

// chai()




