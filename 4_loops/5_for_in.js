const myObject = 
{
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) 
{
    //console.log(key)    //js cpp rb swift
    //console.log(myObject[key])        //javascript C++ ruby swift by apple
    //console.log(`${key} shortcut is for ${myObject[key]}`);        //js shortcut is for javascript
}

//FOR IN LOOP ON ARRAY

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key)     //prints 0 1 2 3....
    //array is stored as an object having default key values as 0 1 2.......
    //console.log(programming[key]);  //prints js rb py .....
}

//FOR IN CANNOT BE USED ON MAP BECAUSE IT IS NOT ITERABLE

