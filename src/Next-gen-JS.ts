//next generation(modern) JS features

const username = "Max" // const is variable that wont change
let age = 20 //let is variable that can be changed
var me = 20//let is variable that can be changed

//the diff btn var and let is scope, for var you only have
// local and global state can be used within functions and
//globally 

//block scope snippet around curly brackets, so with let you can define
//variables even inside local global and block scope if statements, while loops etc...


//Arrow fn
//Shorter syntx , when having single return value you can ommit return
//if you have one arg  you can omit brackets

const add = (n1: number, n2: number) => n1 + n2
console.log(add(10, 2));

//Spread Operators
//to retrieve data from arrays and objects
const hobbies = ['cooking','sports','movies']
const activeHobbies = ['hiking']

// activeHobbies.push(hobbies[0],hobbies[1])
activeHobbies.push(...hobbies)


//rest paramaters
//When you want to add multiple args
const addMultipleValues = (...numbers :number[]) => {
  return  numbers.reduce((curResult,curValue) => curResult + curValue,0)
}



