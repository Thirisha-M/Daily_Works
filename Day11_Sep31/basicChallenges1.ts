/*Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'.
 Now write a function that takes an argument of type 'string | number | boolean' and logs its type.*/

let result: string | number|boolean;
function logType(value: string | number | boolean): void {
    console.log(`The type of the value is: ${typeof value}`);
}
result = "Hello, TypeScript!";
logType(result);
result = 42;
logType(result);
result=true
logType(result);

/*----------------------------------------------------------------------------------------------------------------*/
/* Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number.
 It returns a value that can be either a boolean or a number. Use a union type to achieve this.*/

function combine(flag: boolean, num: number): boolean | number
{
    if (flag){
        return num;
    } else {
        return !flag; 
    }
}
const result1 = combine(true, 42);
console.log(result1); 


const result2 = combine(false, 42);
console.log(result2);

/*----------------------------------------------------------------------------------------------------------------*/
/*. Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes 
these properties when a Bus object is created*/

class Bus {
    // Properties
    make: string;
    model: string;
    year: number;

    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display bus details
    displayDetails(): void {
        console.log(`Bus Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
// Example usage
const myBus = new Bus('Mercedes', 'Sprinter', 2020);
myBus.displayDetails(); 

/*----------------------------------------------------------------------------------------------------------------*/

 












