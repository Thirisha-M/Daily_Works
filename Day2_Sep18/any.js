var result;
result = 1;
console.log(result);
result = 'Hello';
console.log(result);
result = [1, 2, 3];
var total = result.reduce(function (a, b, c) { return a + b + c; });
console.log(total);
/*The Array.reduce() method in TypeScript is used to reduce an array
to a single value by applying a callback functio to each element of the array.

array.reduce(callback[,initialvalue])
*/
//Examples
//Basic Types
// let empName2:any='Test'
// console.log(empName2)
// empName2=20
// console.log(empName2)
// empName2="Thirisha"
// console.log(empName2)
// empName2=true
// //Array using anytype
// let empName3:any[]=[]
// {
//     empName3.push("Thirisha")
//     empName3.push(39)
//     empName3.push(true)
// }
// console.log(empName3);
// //object using anytype
// type empdetaile={
//     name:any;
//     age:any;
// }
// let Empdetailes:empdetaile
// {
//     name:"thirisha"
//     age:21
// }
// //null and undefined
// let x:null=null;
// let y:undefined=undefined
// //Exaple 1
// let randomValue: any;
// randomValue = 10;             
// console.log("Number:", randomValue);
// randomValue = "Hello, world!"; 
// console.log("String:", randomValue);
// randomValue = true;        
// console.log("Boolean:", randomValue);
// // Use 'any' in an array
// let mixedArray: any[] = [1, "Two", true, { key: "value" }];
// mixedArray.forEach((item, index) => {
//     console.log(`Item ${index}:`, item);
// });
// // Use 'any' in a function
// function logValue(value: any): void {
//     console.log("Logging value:", value);
// }
// logValue(123);               
// logValue("This is a test.");  
// logValue([1, 2, 3]);         
