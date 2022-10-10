// Types

// a. PRIMITIVE TYPES
// - number
// - string
// - boolean

//Code(line 11-20) has error on line 6 since number1 is string when execute add()
// will yield 522.3 (concatinate) i.e resulting to logical error to solve that 
// we check the params types (using typescript type checking)

// function add (num1,num2){
//     return num1 + num2;
// }

// const number1 = '5';
// const number2 =22.3

// const result = add(number1,number2)

// console.log(result);

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    } else { return result }
}

const number1 = 5;
const number2 = 22.3
const showResult = true;
const resultPhrase = "The result is: "

add(number1, number2, showResult, resultPhrase)


