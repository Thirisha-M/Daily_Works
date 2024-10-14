//Primitive types

type UserName=string
type YesorNo=boolean
type Age=number
let user:UserName='Divya'
let isENg:YesorNo=true
let age1:Age=21

//Array

type NameArray=string[]

let  userNames:NameArray=['abi','divi','sasu']
console.log(userNames)

//object

type User={
    name:UserName,
    age:Age,
    isEng:YesorNo
}
let user1:User={name:'abi',age:30,isEng:true}
console.log(user1)

//Union Type

type StrOrNum = string|number
let errorCode:StrOrNum='401'
errorCode=401
console.log(errorCode)

//Tuples
type NameandAge=[name:string,age:number]
let empTuple:['abi',30]
