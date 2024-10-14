// accessing the parent class property in the derived class
// the derived class can also have extra methods and properties


class animal{       //parent class
    summa:string;

    constructor(name:string){
        console.log(`${name} make the sound`);
        this.summa=name;
    }
    getname(){
        return this.summa;
    }
}
class dog extends animal{      //child class
    constructor(name:string){
        super(name);
        console.log(`${name} barks`);
    }    
}

class cat extends animal{      //child class
    constructor(name:string){
        super(name);
        console.log(`${name} barks`);
    }    
}
//access those classes through the child class
const Animal=new animal("all animals")
const Dog=new dog("mani")
console.log(Dog.getname());

const Cat=new cat("leela")
console.log(Cat.getname());

console.log(Animal.getname())

