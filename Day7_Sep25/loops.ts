//for loop:
    //for loop
    //for..of loop
    //for..in loop

//1 to 10
for(let i=1;i<10;i++){
    console.log(i);
}
//0 2 4 6 8 10
for(let i=0;i<=10;i=i+2){
    console.log(i);
}
// for..of loop:
let number=[10,200,3000,40000];
for(let n of number){
    console.log(n);
    if(n === 200){
        console.log("hi");
        break;
    }
}
console.log("-----------")
//for..in loop:
let num=[10,200,3000,40000,555555];
for(let i in num){
    console.log(i)
    console.log(i + "=" + num[i]);

}

let info="Hello World";
for(let c of info ){
    console.log(c);
}

//whileloop
// 1 to 10

let p=1;
while(p<=10){
    console.log(p);
    p++;
}

//use case for while:when number of iteration are not fixed:
//1.infinite scrolling:zomato,swiggy,linkedin page..
//2.wait for page loading:2,5,10,15 secs
//3.wait for the element on the page;2,3,5,10 secs
//4.calender handling
//5.webtable pagination:pre...1 2 3 4 5 6....next


//use cases for for loop:
//when number of interatrions are fxed:
// drop down:month:jan to dec:1 to 12
//values are available and array list
console.log("-----------");
//do while:

let d=1;
do{
    console.log(d);//123...10
    d++;//23
}
while(d<=10);

console.log("------------");

let c=1;
do{
    console.log(c);//1
    d++;
}
while(c>=10);//false

console.log("------------");

//continue 
for (let index = 0; index < 9; index++) {
    if (index % 2)
        continue;
    console.log(index);
}

console.log("------------");

//continue in while loop

let index = -1;

while (index < 9) {

    index = index + 1;

    if (index % 2)
        continue;

    console.log(index);
}

console.log("------------");

//continue in Do while

let indexs = 9;
let count = 0;
do {
    indexs+= 1;
    if (indexs % 2)
        continue;
    count += 1;
} while (indexs < 99);
console.log(count); // 45

//break in for loop

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}
console.log(products[i]);

// break in switchcase
let products1 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
let product = products1[1];

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);

/* break in while loop
    while(condition) {
     do something
     ...

    if(anotherCondition) 
         break;
 }*/



