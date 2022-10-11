//Object Types
//Typescript infere Object typr as the object type which unlike JS objects which have key:value pairs the 
//Object type from typescript has ket:type pairs e.g 
//{ name: string; age:number}


//You can do this
// const person: { name: string; age: number } = {
//     name: 'Micah',
//     age: 25,
// }

const person = {
    name: 'Micah',
    age: 25,
}


//Arrays
const Names: string[] = ['juma','Abdul']

//typescript offers great flexible and secure working with arrays example when looping 
// you can predict the returned type and use its respective properties or methd

for (const name of Names) {
    //Since TS understands that name will be string it allows use properties
    // or methods associated with string
    console.log(name.toUpperCase());
}


//Tuple
//With tuple you can predict/format how you want
// your array to be fomred how many elements to be taken and of what typ


const role:[number,string] = [10, 'author']

//NB: with role.push('admn') , this will add admin to tuple and breaks
// tupple rule (note you defined it to have only two elements) but 
//with role = [10,'author', 'admin'] admin wont be added


//Enum : Create Human readable constants and map values behind the scene
//are unumerated global constant identifiers,(not found in JS)
//When u need a global constant which u want to represent as number and assign human readable label;

//enum name must start with capital letter, 
//In the example below  ADMIN is assigned to no.0 
//if you want to start from other no aprt from 0
//you can simply assign it to the first element on enum i.e ADMIN = 5
//or you can define your custom roles and types
// i.e enum Role {ADMIN ='ADMIN', READ_ONLY=100, AUTHOR=200}
enum Role {ADMIN, READ_ONLY, AUTHOR}

//Any(*)
// Flexible , it gives you experience as JS any type is OK
//Do not fallback to any if you dont need to