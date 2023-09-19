function calculate() {
    // Obtener los valores de los inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultSpan = document.getElementById("result");

    // Realizar la operación seleccionada
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "*") {
        result = num1 * num2;
    }

    // Mostrar el resultado
    resultSpan.textContent = result;
}