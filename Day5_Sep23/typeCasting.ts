//syntax
//as or <>

//unKnown string to string

let x:unknown='hello'
console.log((x as string).length)
console.log((<string>x).length)

//unknown number to string


let y:unknown='20'
console.log((y as string).length)//undefined
