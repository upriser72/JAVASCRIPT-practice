const coding = ["js", "ruby", "java", "python", "cpp"]

//basic syntax: uses function callback so the name of function is not specified

// coding.forEach( function (val)
//{
//     console.log(val);
// } )

// coding.forEach( (item) => {   //arrow function
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   //using foreach on pre existing function

//  coding.forEach( (item, index, arr)=> {
//    console.log(item, index, arr);
// } )
/*
OUTPUT 
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
const myCoding = [      //this is an array of various objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )