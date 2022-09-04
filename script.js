var feetVlaue;   // Variable for storing feet value
var centimeterValue;   // Variable for string centimeter value
var input = document.getElementById('input');
var result = document.getElementById('result');

document.getElementById('btn').addEventListener("click", function () {

    // get feet value:
    feetVlaue = parseInt(input.value);
    // check if feet value is valid number
    if (feetVlaue <= 0) {
        result.innerHTML = "Please enter a positive value";
    } else if (isNaN(feetVlaue)) {
        result.innerHTML = "Please enter a valid number";
    } else {
        centimeterValue = input.value * 30.48;
        result.innerHTML = centimeterValue;
    }
    input.value = '';
}
);
