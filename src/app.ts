//Generic types:is a type which is kind connected with other type and
// flexible regarding which exact type other type is
//example Array in TS are generic types array themselves are type(list of objects)
//but with TS with specify what type of objects(items) array can hold and taht makes it a Generic Type


//Example of built-in generic types(Array & Promise)
const names: Array<string> = [] //is similar to define type as string[]

const promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

//Generic Fn