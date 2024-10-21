//Enums-group of constants

//number

enum Direction{
    East,
    West,
    South,
    North,

}
console.log(Direction.East);

//string

enum Direction1{
    East='east',
    West='west',
    South='south',
    North='north',

}
console.log(Direction1.South)
console.log(Direction1.North)

//Example

enum Month{
    Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
};
function isItSummer(month: Month) {
    let isSummer: boolean;
    switch(month){
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
            default:
                isSummer = false;
                break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Feb));
console.log(isItSummer(6));

//Example1

enum Month1 {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
console.log(Month1);

//Example2

enum Direction {
    Up=0,
    Down,
    Left,
    Right
}

let currentDirection: Direction = Direction.Up;

if (currentDirection === Direction.Up) {
    console.log("You are moving up!");
}

//Example 3

enum ApprovalStatus{
    draft,
    submitted,
    approved,
    rejected,
};
const request = {
    id:1,
    status:ApprovalStatus.rejected,
    description:'Please approve this request'
};
if(request.status == ApprovalStatus.rejected){
    //send an email
    console.log('Send email to the Applicant...')
}
else{
    console.log('error');
}

//Example 4

enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}


let responseStatus: StatusCode = StatusCode.NotFound;

if (responseStatus === StatusCode.NotFound) {
    console.log("Error: Page not found! Status Code:", responseStatus);
}
console.log(StatusCode[200]); 
console.log(StatusCode[404]); 
