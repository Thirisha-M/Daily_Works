//Abstract class-Incomplete class

abstract class Person{
    abstract name:String


    abstract print():void
}

//Child class

class Student extends Person{
    name:string

    constructor(x:string){
        super()
        this.name=x
    }
    print=()=>{
        console.log(this.name)
    }
}
let studentObject = new Student('john')

studentObject.print()

//Abstract vs Interface

interface AddressInterface{
    city:string
}