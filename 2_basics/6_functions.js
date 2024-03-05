
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("E");
    console.log("T");
    console.log("A");
}

//sayMyName()

function addTwo(num1,num2)  //num1 num2 called parameters
{
    
    console.log(num1+num2)
}

addTwo(3,6)  //3,6 called arguments

addTwo(6,"4")  //converts string to num
addTwo(4,null)  // added to null

const res =addTwo(4,2)
//console.log("Result:", res)  //result undefined because the function doesn't return anything

function mulTwo(num1,num2) 
{
    
 let res=num1*num2
 return res
 console.log("APPLE")  //function terminates at resturn statement
}

const result =mulTwo(4,2)
//console.log("Result:", result)  // now result=8

function login(name)
{
    return `${name} just logged in`  //use back ticks for string interpolation
}
console.log(login("Riya"))
console.log(login())  //undefined just logged in







