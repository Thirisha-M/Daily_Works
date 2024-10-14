// The readonly is more similar to the const keyword
// The value can be changed only in two places inside the class and constructor


class Employee_details{
    readonly _name:string="divya" //readonly is used in the _name
    _id:number


get emp_name(){
    return this._name
}

set emp_name(values:string){
    this._name=values //cannot assign to '_name' because it is a read_only property.
}
}
const employee_details=new Employee_details
employee_details.emp_name="sasu"
console.log(employee_details.emp_name);

// Error free code
// when readonly is used in the code the value can only be changed in the class definition and in constructor

class Employee_details{
    readonly _name:string="sasu"//readonly is used in the _name
    _id:number

get emp_name(){
    return this.name
}
}
const employee_details1=new Employee_details
console.log(employee_details.emp_name);

