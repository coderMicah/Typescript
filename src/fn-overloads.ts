//function overloads comes in hand When TS cannot infere the returned type on its own 
// syntax for fn overloads (function fnname above your fn)

type Combinable = string | number;


function addition(a:string,b:string):string
function addition(a:string,b:number):string
function addition(a:number,b:string):string
function addition(a:number,b:number):string
function addition(a:Combinable, b:Combinable) {
    if(typeof a === 'string' || typeof b === "string"){
       return a.toString() + b.toString()
    }

    return a + b
}



//without fn overloads TS understands that the answer might be of type string or number this 
//might cause conflicts(eg we cant call string methods ) 
//to solve the problem we use fn overloads above the defined fn
addition(2,3)

