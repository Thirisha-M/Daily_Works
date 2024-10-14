//you have multiple function
//1.with the same name
//2.different paramter type and return type
//3.number of paramter should be same or optional or default value

function add(a:number,b:number,c:number):number
function add(a:string,b:string):string
function add(a:boolean,b:boolean):number

function add(a:any,b:any,c?:number):any{
    return a+b+c
}

console.log(add(20,30,40));

