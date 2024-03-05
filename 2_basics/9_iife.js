// Immediately Invoked Function Expressions (IIFE)

//used for immediate calling of a function
//used to reduce pollution of global scope variables


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //IIFE doesn't know when to stop so use semicolon

//wrap func in () then use () for function call (functon declaration)()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mayra')