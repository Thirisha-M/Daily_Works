/*syntax for annotation
let variableName:type;
let variableName:type=value;
const constName:type=value;
*/
//number annotation for a variable

var Counter;
Counter = 1;
console.log(Counter);

//primitive type annotation

var name1 = 'john';
var age = 35;
var active = true;
console.log(name1, age, active);

/* syntax for array annotation
let Arrayname:type[];
let Arrayname:type[]=[values];
*/

var names = ['abi', 'thirsha', 'maggi', 'vidhu'];
console.log(names);

//object type annotation

var person;
person = {
    name2: 'divya',
    age: 20,
};
console.log(person);

//Function annotation

var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting('Sasvika'));
