/*
There are two types of memories:
1.Stack :  For all Primitive datatypes like Number,String etc
2.Heap :   For all non primitive datatypes like objects,functions,arrays

Stack uses copies of a variable whereas Heap gives direct reference to original value.
*/

let someVar = "Apple";
let anotherVar = someVar;
console.table([someVar,anotherVar]);
anotherVar = "Banana"
console.table([someVar,anotherVar]);

//this is an example of primitive datatype hence uses stack
//stack uses copy so change in anotherVar did not affect value of someVar

let obj1= {
    name: "Priya",
    place: "Kanpur",
    age: 21,
}

let obj2 =obj1;

obj2.place = "Lucknow";

console.log([obj1,obj2]);

//this is an example of non primitive datatype hence uses heap
//heap uses reference of original value hence change in city for obj2 reflects in obj1 as well unlike stack
