// const coding = ["js", "ruby", "java", "python", "cpp"]

// //putting items of the loop in a variable
// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// console.log(values)   //forEach loop returns nothing 

//Filter

const nums = [1,2,3,4,5,6,7,8,9,10]

//filter also takes callbacks
const newnum = nums.filter( (num) => num>4)  //IMPLICIT RETURN
//console.log(newnum)

// const newNum = nums.filter( (num) => {
//      return num>4      //EXPLICIT RETURN USE THE return STATEMENT
// }) 

//USING FOREACH IN CASE OF FILTER

const arr =[]
nums.forEach( (item) => {
    if(item>5)
    {
        arr.push(item)
    }
})
//console.log(arr)


//BOOKS EXAMPLE

const books = [
    { title: 'Cinderella', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'NCERT', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Mohenjodaro', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Chanakya', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Chemistry', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Famous Five ', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Egypt', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Practical physics', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Psychology of Money', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let users = books.filter( (bk) => bk.genre === "Fiction")
users = books.filter( (book) => {
     return book.publish >=1992 && book.genre ==="Science"
})   //overwriting variable
console.log(users)