

function add(n1:number, n2:number) {
    return n1+n2
}

//Function return types : declare what type of return will be returned by fn
//if the function  does not return anything (like below exampl) use void

function printResult(num:number): void {
   console.log(`Result` + num);
}

printResult(add(5,122))

//Function type allows us to define which type of function we want to use somewhere
//allows us defune the exp[ected params and return type
let combineValues : (a:number, b:number) => number

function addPrint(n1:number, n2:number,cb:(num:number) =>void) {
    const result = n1+n2
    cb(result)
}

addPrint(12,122,result => console.log(result))