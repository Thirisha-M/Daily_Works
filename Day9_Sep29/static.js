// // the static method is used when the class should have the single copy of that instance
// // the static method cannot be accessed by the instance of he class
// // it can be accessed by the class name itself
// // creating a class and keep the age a static
// class patient_Details{
//     name:string="Divya"
//     static age:number=12;
//     display_name(){
//         console.log(this.name);
//     }
//     display_age(){
//         console.log(patient_Details.age);//the age can be accessed by the class name rather than the this keyword
//     }
// }
// const Patient_details=new patient_Details
// Patient_details.display_name
// console.log(Patient_details.age);//the age is static thus we cannot access it by the instance
// thus the code throws the error
var patient_Details = /** @class */ (function () {
    function patient_Details() {
        this.name = "divya";
    }
    patient_Details.prototype.display_name = function () {
        console.log(this.name);
    };
    patient_Details.display_age = function () {
        console.log(patient_Details.age); //the age can be accessed by the class name rather than this keyword 
    };
    patient_Details.age = 22;
    return patient_Details;
}());
var Patient_details = new patient_Details;
Patient_details.display_name();
patient_Details.display_age(); //accessing the age directly using the class name
5;
