/*Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'.
 Now write a function that takes an argument of type 'string | number | boolean' and logs its type.*/
var result;
function logType(value) {
    console.log("The type of the value is: ".concat(typeof value));
}
result = "Hello, TypeScript!";
logType(result);
result = 42;
logType(result);
result = true;
logType(result);
/*----------------------------------------------------------------------------------------------------------------*/
/* Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number.
 It returns a value that can be either a boolean or a number. Use a union type to achieve this.*/
function combine(flag, num) {
    if (flag) {
        return num;
    }
    else {
        return !flag;
    }
}
var result1 = combine(true, 42);
console.log(result1);
var result2 = combine(false, 42);
console.log(result2);
/*----------------------------------------------------------------------------------------------------------------*/
/*. Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes
these properties when a Bus object is created*/
var Bus = /** @class */ (function () {
    // Constructor to initialize properties
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to display bus details
    Bus.prototype.displayDetails = function () {
        console.log("Bus Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Bus;
}());
// Example usage
var myBus = new Bus('Mercedes', 'Sprinter', 2020);
myBus.displayDetails();
/*----------------------------------------------------------------------------------------------------------------*/
/* Find largest among three numbers*/
var largestNumber;
(function (a, b, c) {
    if (a > b && a > c) {
        console.log("The largest Number is a");
    }
    else if (b > c && b > a) {
        console.log("The largest number is b");
    }
    else {
        console.log("The largest number is c");
    }
});
console.log(largestNumber(20, 70, 90));
