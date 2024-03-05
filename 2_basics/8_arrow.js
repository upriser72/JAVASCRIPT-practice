const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {  //welcomeMessageis a method here
        console.log(`${this.username} , welcome to website`);  //using this keyword for CURRENT SCOPE
        console.log(this);
    }

}