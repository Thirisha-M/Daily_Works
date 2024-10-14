

// Creating the class

class User {
    id: number

    constructor(x: number) {
        this.id = x
    }
}
let userobject = new User(10)
console.log(userobject.id)


//Interface

interface personInterface {
    id: number,
    name: string
}
interface AddressInterface {
    city: string
}

//class implements interface

class person implements personInterface {
    id: number
    name: string
    city: string
    constructor(id: number, name: string, city: string) {
        this.id = id
        this.name = name
        this.city = city
    }
    getName = () => {
        return this.name
    }
}
let Person = new person(100, 'Divya', 'chennai');
console.log(Person.name)
console.log(Person.getName())


//class implements multiple interfaces
//Extends

class Student extends person {
    studentId: number = 101

    print() {
        console.log(`name is $(""divya") and id is $(this.studentId)}`)
    }

}
let student = new Student(100, "divya", "chennai")
student.print()