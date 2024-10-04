//array declaration
let skills:string[];
skills=['problem Solving','Software Design','programming'];
console.log(skills);
//push method
skills.push('2050');
console.log(skills);
//add one or more string
let skills1:string[]=[];
skills[0]='abi';
skills[1]='thirs';
skills[2]='maggi';
skills.push('vidhya');
console.log(skills);
//typeof
let skills2=['divya',21,false];
console.log(typeof(skills2[1]));
//length
let series=[1,2,3,"divya","true"];
console.log(series.length);
//map
let series1 = [1, 2, 3];
let doubleIt = series1.map(a =>a*2);
console.log(doubleIt);
//mixed type
let scores : (string | number| boolean)[];
scores=['programming',2,'divya',true];
console.log(scores);
//filter type
let numbers: number[] = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter((num) => num > 3);
console.log("Filtered numbers greater than 3:", filteredNumbers);
//read only
let sample8:readonly number[]
sample8=[1,2,3]
console.log(sample8);
//Implicit
let sample=[1,2,3];
let sample1=["a","b","c"];
let sample2=[true,false];
console.log(sample,sample1,sample2);
//Explicit 
let sample3: number[]=[1,2,3,4];
let sample4:string[]=["a","b","c"];
let sample5:boolean[]=[true,false];
console.log(sample3,sample4,sample5);
//Declare and Assign later
let sample6:number[];
sample6=[]
sample6.push(5);
let sample7:string[];
sample7=[]
sample7.push("Sasvika");
console.log(sample6,sample7);


