//when there is a need that the derived class should have the common behaviour that of the parent class then the abstract class is used 
//The abstract keyword is used to define the abstract class
//inside the abstract class there can be abstract methods and properties
// when those methods and properties are declared as abstract then that methods and properties must be defined inside the derived class that extends the abstract class
abstract class abstract_class {
    name: string;
    age: number;
}
class derived_class extends abstract_class {
    name = "diya"
}
const c1 = new derived_class();
console.log(c1.name);


// create a abstract class "animal" and extend that class in the classes named "cat","dog"

abstract class animal{
    name: string
    age: number;
    getsound() {
        return `${this.name}makes the sound`
    }
}
class dog extends animal {
    name = "mani"
    age = 90;
    //the name is the abstract property thus the name must be defined  inside the derived class 
}
class cat extends animal {
    name = "Sugar"
    age = 34;4
    //the name is the abstract property thus the name must be defined  inside the derived class
}

const c = new cat
const d = new dog

console.log(c.getsound());
console.log(d.getsound());