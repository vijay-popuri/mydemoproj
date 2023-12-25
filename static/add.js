function addNumbers() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').innerHTML = 'Result: ' + sum;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    }
}
