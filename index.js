console.log("Hello World");

let numberOne = Number(prompt("Enter Number 1"))
let numberTwo = Number(prompt("Enter Number 2"))
let operator = Number(prompt("Enter operation: 1-Addition, 2-Subtraction, 3-Multiplication, 4-Division"))

if(operator === 1){
    console.log(numberOne + numberTwo);
}
else if(operator === 2){
    console.log(numberOne - numberTwo);
}
else if(operator === 3){
    console.log(numberOne * numberTwo);
}
else if(operator === 4){
    console.log(numberOne / numberTwo);
}
else{
    console.log("Operation not recgonized");
}