let skills:string[];
skills=['problem Solving','Software Design','programming'];//array declaration
console.log(skills);
skills.push('2050');
console.log(skills);//push method
let skills1:string[]=[];
skills[0]='abi';
skills[1]='thirs';
skills[2]='maggi';
skills.push('vidhya');
console.log(skills);//add one or more string
let skills2=['divya',21,false];
console.log(typeof(skills2[1]));//string,number,boolean[skill[0,1,2]]
let series=[1,2,3,"divya","true"];
console.log(series.length);//length
let series1 = [1, 2, 3];
let doubleIt = series1.map(a =>a*2);//map
console.log(doubleIt);
let scores : (string | number| boolean)[];
scores=['programming',2,'divya',true];
console.log(scores);//mixed type
var numbers = [1, 2, 3, 4, 5];
var filteredNumbers = numbers.filter(function (num) { return num > 3; });
console.log("Filtered numbers greater than 3:", filteredNumbers); //filter type
