//Funtion Type
// let greet:Function;
// greet= () => { 
//     return"Hello"
// } 
// console.log(greet);
// //Function with Parameter
//  let add:Function;
//  add=(a:number,b:number)=>{
//     return(add(10,20))
//  }
// console.log(add(15,15)) ;
//Function with Return type
// let add2:Function;
// add2=(a:number,b:number):number=>{
//     return a+b;
// }
// console.log(add2(15,47));
// //Function with Union Type Params
// let add1:Function;
// add=(a:number,b:number,c?:(number|string)):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
// }
// console.log(add(15,47));
// //Function with default value
// let add3:Function;
// add3=(a:number,b:number,c:(number|string)=10):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
// }
// console.log(add3(15,47));
// //Function with Type alias params
// type StrOrNum1=string|number
// let addition:Function;
// add3=(a:number,b:number,c:StrOrNum1=10):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
// }
// console.log(add3(15,47));
// //Function with object params
// type User={
//     name:string,age:number
// }
// let printObject = (user:User)=>{
//     console.log(`name is ${user.name}and age is${user.age}`)
// }
// printObject({name:'Test',age:30})
//rest params
var add4;
add4 = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    console.log(c);
    var d = c.reduce(function (x, y) { return x + y; }, 0);
    return a + b + d;
};
console.log(add4(15, 47, 1, 2, 38, 98));
