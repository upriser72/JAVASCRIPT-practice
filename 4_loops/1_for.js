// for

for (let i = 0; i <= 10; i++) 
{
    const element = i;
    if (element == 5) 
    {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) 
{
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) 
   {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++)
 {
    const element = myArray[index];
    //console.log(element);
    
}


// BREAK AND CONTINUE

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break                              //stops execution after the condition is reached
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) 
{
    if (index == 5)
     {
        console.log(`Detected 5`);
        continue                             // detected 5 then prints 6 rather than 5| skips 5
    }
   console.log(`Value of i is ${index}`);
    
}