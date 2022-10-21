//interface describe structure of the obj
//we use it to type check the structure of our defined obj
//properties and method in interafces are not initialized or defined
interface Named {
    //we can use readonly on interface as an extra feature
    readonly name: string
}

//INHERITANCE on interfaces
//you can extend multiple interfaces unlike classes
interface Person extends Named {
    //age is optional property (can be defined or not in our object)
    age?: number;

    greet(phrase: string): void
}

let user1: Person

user1 = {
    name: 'MJ',
    age: 30,
    greet(phrase: string) { console.log(phrase + " " + this.name); },
}

user1.greet('Hello I am')

//why interfaces
//share functionalities among classes


//Interface as Function Type
//interfaces can also be used to define fn structure
// type addFn =(n1:number,n2:number) => number
interface addFn {
    (n1: number, n2: number): number
}
let add: addFn = (n1, n2) => {return n1 + n2}


