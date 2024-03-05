//var c = 300
let a = 300
if (true) 
{
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  //prints a=10 due to block scope
    //var c=30

    
}
//1(GLOBAL SCOPE)   2(BLOCK SCOPE)


// console.log(a);  //gives output 300 doesn't get affected by a=10 because let is used instead of var
// console.log(b);
// console.log(c);  //gives output of c=30 when its in block scope of if statement AVOID var

/*
NOTE :SCOPE WORKS DIFFERENT IN NODE AND BROWSER CONSOLE
*/

function one(){
    const username = "amrita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //gives error

     two()

}

// one()
//child function can access info of parent function vice versa not true

if (true) {
    const username = "simran"
    if (username === "simran") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //gives error
}

// console.log(username);  //gives error

// ++++++++++++++++++ interesting ++++++++++++++++++


addone(7)  //runs without error even if func is defined later
function addone(num){
    return num + 1
}
addone(5)


addTwo(4)   //gives error not defined

const addTwo = function(num){  //declaring functions like this is called EXPRESSIONS 
    return num + 2
}
addTwo(5)

//difference happens because of type of declaration of function


