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

function calculate() {
  
    display.value = eval(display.value);
}

