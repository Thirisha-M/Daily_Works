type Name=string;
let firstName: Name;
let lastName:Name;
firstName="abi";
lastName="rahul";
console.log(firstName);
console.log(lastName);
    

//object
type Person ={
    name: string;
    age: number;

};

let person: Person ={
    name:'abi',
    age:23
};
console.log(person);
 

//union
type alphanumeric = string | number |boolean;
let input: alphanumeric;
input=100;
input='hi';
input=false;
console.log(input);


//intersection
    type personal ={
        name:string;
        age:number;

    };
    type contact ={
        email:string;
        phone:string;

    };
       type Candidate = Person & contact;
       let candidate :Candidate ={
        name:"abi",
        age:25,
        email:"vabigmail.com",
       phone:"908888888",
        

       };
       console.log(candidate);
