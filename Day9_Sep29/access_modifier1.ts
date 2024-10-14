//There are 3 access modifier in typescript
//public,private,protected are the 3 access modifiers in the typescript
// by default,every properties and methods are public

class Student_details{
    public _name:string="divya"
    private _age:number=21
    protected _isstudent=true

get _name_retrieve(){
    return this._name
}
}
const student_details=new Student_details
console.log(student_details._name_retrieve);//the _name is declared as public so it can be used anywhere in the code
console.log(student_details.age);//property '_age' is private and only accessible within class 'Student_details"


// Thus the private keyword is used when the property or method should only used inside the class
// The public keyword is used when the property or method is used anywhere in the code

class Sub_details extends Student_details{
    get _isstudent_retrieve(){
        return this._isstudent
    }
}
const sub_details=new Sub_details
console.log(sub_details._isstudent_retrieve);
