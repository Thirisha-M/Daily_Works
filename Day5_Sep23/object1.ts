//Implicit

let employee1={
    name:"Thirisha",
    age:21,
    ispermanent:true
}
console.log(employee1)

//explicit

type Employee={name:string,age:number;ispermanent:boolean

}
let employee:Employee={
    name:"Thirisha",
    age:21,
    ispermanent:true
}
console.log(employee);

//Optionals
type Employee1={name:string,age?:number;ispermanent:boolean

}
let employee2:Employee1={
    name:"Thirisha",
    ispermanent:true
}
console.log(employee2);


