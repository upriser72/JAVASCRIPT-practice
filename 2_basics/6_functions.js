
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

function login(name = "Harry") //setting a default value so that undefined cannot be stated
{
    // if(name===undefined)
    // {
    //     console.log("Please enter a username")
    //     return 
    // }

    if(!name)  //because undefined,empty string,null are all evaluated to boolean false
    {
        console.log("PLease enter a username");
        return
    }    
    return `${name} just logged in`  //use back ticks for string interpolation
}
console.log(login("Riya"))
console.log(login())  //undefined just logged in

function calculateCartPrice(val1,val2, ...num)  //...is called REST operator here||
                                                //It also works as SPREAD operator at places
{
    return num
}
console.log(calculateCartPrice(20,500,221,5667,90))

const user = {
    username: "shanaya",
    prices: 199
}

function handleObject(anyobject)  //passing pre existing object as a parameter
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({    //passing object as a parameter directly
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)  //passing array as parameter
{ 
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



