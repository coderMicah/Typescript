
//Classes are instance of an object, use d to define how object will look like
class Department {
   //Instead of initializing the properties here and then paassing them again in 
   //the constructor fn as arg and assigning values you can simply use shorthand initialization
  
   //properties
   //  public name:string;
   //  private id:string

   ///behaves as private except it can be accessed from inherited class
   protected employees: string[] = []

   //constructor fn will be called every time once the 
   //instance of the Class is being created

   //readonly ; property is initialized only once and cannot be changed
   constructor(private readonly id: string, public name: string) {
      this.name = name
      this.id = id
   }


   //static methods and properties this methods can be accesed without instantiating a class
   //cannot be accesed within class
   static createEmployee(name:string){
      return ({name:name})
   }

   addEmployee(employee: string) {
      this.employees.push(employee)
   }

   printEmployeeInfo() {
      console.log(this.employees.length, this.employees);
   }

   //methods
   describe(this: Department) {
      console.log(`department (${this.id}): ${this.name}`);

   }

}


//Inheritance
class AccountingDepartment extends Department {
   private latestReport: string
   //No properties since properties are added using shorthand initialization on constructor()
   //as result report property with same name as arg passwd(i.e reports)
   constructor(id: string, private reports: string[]) {
      super(id, 'Accouting');
      this.latestReport = reports[0]
   }

   //Getters & Setters importnt to accesss private properties
   //getters and etters always take string and return strings
   //if you have any data type (i.e array, number etc..) convert it to string
   get mostRecentReport() {
      if (this.latestReport) {
         return this.latestReport
      }
      throw new Error("No report was found");

   }

   set mostRecentReport(value: string) {
      if (!value) {
         throw new Error("Please enter a valid value");
      }
      this.addReport(value)
   }

   //method overriding
   addEmployee(employee: string) {
      if (employee === 'Baraka') {
         return
      }
      this.employees.push(employee)
   }
   addReport(text: string) {
      this.reports.push(text)
      this.latestReport = text
   }
   printReport() {
      console.log(this.reports);

   }
}

//to insatntiate a class use the new keywor follewed by the class you want to instantiate
const accounting = new Department('d1', 'Accounting')


// methods being called for Department class
accounting.describe()
accounting.addEmployee('Juma')

console.log(accounting);

//static method called here
console.log(Department.createEmployee('John Snow'));


//Inherited class being instantiated
const ac = new AccountingDepartment('d3', ['Something went wrong'])

//using setter to add recent report
ac.mostRecentReport= 'End Year Report'

//inherited class methods
ac.addEmployee('Baraka')
ac.addEmployee('Juma')
console.log(ac);



