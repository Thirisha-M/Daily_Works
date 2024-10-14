//Data Modifier-class la property visibitlity set pannum
// Public,protected,private
//read only

class Person {
     name: string
    constructor(name: string) {
        this.name = name

    }
}
class Employee extends Person {

    print = () => {
        console.log(this.name)
    }
    changeName = (name: string) => {
        this.name = name
    }
}
let empObject = new Employee('john')

empObject.print()
empObject.print()

empObject.name = "Testing"

empObject.print();