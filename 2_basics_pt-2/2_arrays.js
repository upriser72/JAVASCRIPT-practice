const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  
//adds dc array inside marvel array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   //adds dc array at end of marvel array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//this is called SPREAD OPERATOR  it spreads all values of array individually

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//gives all values of array under array as a single array
console.log(real_another_array);



console.log(Array.isArray("Apple"))
console.log(Array.from("Apple")) //array of all letters
console.log(Array.from({name: "banana"}))// gives empty array // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));