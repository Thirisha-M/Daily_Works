//rightangle triangle

function rightAngledTriangle(n: number): void {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(rightAngledTriangle(5));

//Inverted Triangle

function invertedRightAngledTriangle(n: number): void {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(invertedRightAngledTriangle(5));

//square pattern
function squarePattern(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row); // Print the entire row once.
    }
}
squarePattern(5);

//A letter pattern
function Apattern(n:number):void{
    for(let i=0;i<n;i++){
        let row=" ";
        for(let j=0;j<i;j++){
            if(i==0||j==0||i==n-2||j==n-2){
                row += "*";
            }else{
                row += " ";
            }
            }
            console.log(row);
        }
    }
Apattern(5)
//E pattern

function Epattern(n:number):void{
    for(let i=0;i<n;i++)
    {
    let row=" ";
    for(let j=0;j<i;j++){
        if(i==0||j==0||i==n/2||i==n-1||j==n-1||i==1){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
    }
}
Epattern(5)