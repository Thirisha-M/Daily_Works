//for loop:
//for loop
//for..of loop
//for..in loop
//1 to 10
for (var i = 1; i < 10; i++) {
    console.log(i);
}
//0 2 4 6 8 10
for (var i = 0; i <= 10; i = i + 2) {
    console.log(i);
}
// for..of loop:
var number = [10, 200, 3000, 40000];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var n = number_1[_i];
    console.log(n);
    if (n === 200) {
        console.log("hi");
        break;
    }
}
console.log("-----------");
//for..in loop:
var num = [10, 200, 3000, 40000, 555555];
for (var i in num) {
    console.log(i);
    console.log(i + "=" + num[i]);
}
var info = "Hello World";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var c_1 = info_1[_a];
    console.log(c_1);
}
//whileloop
// 1 to 10
var p = 1;
while (p <= 10) {
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
var d = 1;
do {
    console.log(d); //123...10
    d++; //23
} while (d <= 10);
console.log("------------");
var c = 1;
do {
    console.log(c); //1
    d++;
} while (c >= 10); //false
console.log("------------");
//continue 
for (var index_1 = 0; index_1 < 9; index_1++) {
    if (index_1 % 2)
        continue;
    console.log(index_1);
}
console.log("------------");
//continue in while loop
var index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}
//continue in Do while
var indexs = 9;
var count = 0;
do {
    indexs += 1;
    if (indexs % 2)
        continue;
    count += 1;
} while (indexs < 99);
console.log(count); // 45
