//Type Casting : helps you tell TS that some value is of
// specific type where tS IS UNABLE to detect on its won

//useful when working with the dom and using useselector to select elements with id or classname
//Exclamation defines that the statement will not return null

// There are Two syntax to perform type Casting
// const userInput =<HTMLInputElement> document.getElementById('user-input')!


//Method two is suitable with JSX files
const userInput = document.getElementById('user-input')! as HTMLInputElement
userInput.value = 'Type Casting'