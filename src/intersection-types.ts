//Intersection types (Combine two or more types)
//when used with objects it combines the objects
//when used with types it finds the intersect type

//Intersection with types
type combinable = number | string
type combination = number | boolean

//the universal will be number  since its found in both combinable and combination
type universal = combinable & combination

//Intersection with Objects
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: "Vagabond",
    privileges: ['supervisor'],
    startDate: new Date()
}

console.log(e1);


// type guards approach which is used to checks the existence of property or method b4 using it
//fo other types you can use typeof, for objects you can use in and for classes instance of


//Type guards with types
type both = number | string
function add(a: both, b: both) {
    if (typeof a === "string" || typeof b === "string") { return a.toString() + b.toString() }
    return a + b
}


//TYPE GUARDS WITH OBJECTS
type unknownEmployee = Admin | Employee

function employeeInfo(emp: unknownEmployee) {
    console.log(emp.name);
    if ('privileges' in emp) { console.log(emp.privileges); }
    if ('startDate' in emp) { console.log(emp.startDate); }
}

//TYPE GUARDS WITH CLASSES
class Truck {
    drive() { console.log('drive....'); }
    carryCargo(amount: number) { console.log(amount + 'loaded'); }
}
class Car {
    drive() { console.log('drive....'); }
}

type Vehicle = Truck | Car

function vehicleInfo(v: Vehicle) {
    console.log(v.drive);
    if (v instanceof Truck) {
        v.carryCargo(25)
    }
}