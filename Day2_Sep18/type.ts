//type identfiction

//without using function

let a=true;
console.log(typeof(a));

//using function

let type:(a:any)=>any;
type=function(a:any)
{
    return typeof(a);
}
console.log(type("divya"))
console.log(type(true))


