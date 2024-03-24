//MAP

/*
A key in the Map may only occur once; it is unique in a map collection
Map is an object  datatype
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
*/

const map =new Map()
map.set("IN","INDIA")
map.set("US","UNITED STATES OF AMERICA")
map.set("RS","RUSSIA")
map.set("IN","INDIA")  //no repeated values taken

//console.log(map)

/*
OUTPUT
Map(3) {
  'IN' => 'INDIA',
  'US' => 'UNITED STATES OF AMERICA',
  'RS' => 'RUSSIA'
}
*/

//order of the input data remains same

for(const key of map)
{
    console.log(key)   //gives output like [ 'IN', 'INDIA' ]
}

for(const [key,value] of map)  //by this,key and value can be accessed separately 
{
    console.log(key ,":-" ,value)  //gives output IN :- INDIA
}

//this syntax of for of loop is iterable on map but not on objects
