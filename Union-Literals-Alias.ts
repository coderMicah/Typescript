//UnionType
// When you need flexible cominations (i.e concatinate strings & add numbers with same fn)
//u might use runtime check when working with union types

function combined(input1: number | string, input2: number | string) {

    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;

}

//Literals help define type specificaly what type you want, example below shows as-number is used as 
// type for checking resultConversion

function combinedWithLiteral(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {

    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion==='as-number' ) {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;

}

const combinedNamesLiteral = combinedWithLiteral('Juma', 'Nyoso','as-text')
console.log(combinedNamesLiteral);

const combinedNumbersLiteral = combinedWithLiteral(10, 389,'as-text');
console.log(combinedNumbersLiteral);


//Alias ensure types are used and defined in one place, mstly used with union types

type combinable =number | string
type convertable = 'as-number' | 'as-text';
function combinedWithAlias(input1: combinable, input2: combinable ,resultConversion:convertable ) {

    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion==='as-number' ) {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;

}

const combinedNamesAlias = combinedWithAlias('Juma', 'Nyoso','as-text')
console.log(combinedNamesAlias);

const combinedNumbersAlias = combinedWithAlias(10, 389,'as-text');
console.log(combinedNumbersAlias);
