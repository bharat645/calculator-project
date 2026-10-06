const display = document.getElementById("display");

function showDigit(digit) {
    display.value += digit;
}

function cleardisplay() {
    display.value = "";
}
function backspace(){
      display.value = display.value.slice(0,-1);

}

// function calculate() {
  
//     display.value = eval(display.value);
// }
function calculate(){
let value = display.value
console.log(value)
let parts =  value.split(/([+\-*/])/)
console.log(parts)
 let num1 = Number(parts[0])
 console.log (num1)
  let operator = (parts[1])
   console.log (operator)

 let num2 = Number(parts[2])
  console.log (num2)

let result = 0;

switch(operator){
  case "+":
    result = num1 + num2
    break;
    case "-":
    result= num1 - num2
    break;
    case "*":
    result= num1 * num2
    break;
    case "/":
    result= num2 !==  0? num1 /num2:"error"
    break;
    default:
      result= "error"

}
display.value= result
}

