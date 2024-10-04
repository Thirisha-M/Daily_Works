// Function that does not return anything
var greetUser:(name:string)=>void
greetUser=function(name: string)
{
    console.log(`Hello, ${name}! Welcome to TypeScript.`);
}
// Call the function
greetUser("Alice");

// Function with a void return type
function logMessage(): void {
    console.log("This function does not return anything.");
}
// Call the function
logMessage();

//if you use the void type for a variable, you can only assign undefined to that variable.

let useless: void = undefined;
useless = 1; // error

//If the --strictNullChecks flag is not specified, you can assign the useless to null.

useless=null;//ok