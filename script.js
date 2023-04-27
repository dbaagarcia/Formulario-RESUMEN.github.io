
let random = () => Math.floor(Math.random() * 10) + 1;
const num1 = random()
const num2 = random()
const operadores = ["+", "-", "*", "/"];
const operadorAleatorio = operadores[Math.floor(Math.random() * operadores.length)]
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("operation").innerHTML = operadorAleatorio;
var realizarOperacion = function () {
    let resultado = 0
    switch (operadorAleatorio) {
        case "+":
            return resultado = num1 + num2;
        case "-":
            return resultado = num1 - num2;
        case "*":
            return resultado = num1 * num2;
        case "/":
            return resultado = num1 / num2;
        default:
            console.log("Operador no válido.");
            return resultado
    }
}

var validar = function () {
    let resultado = parseInt(document.getElementById("num").value)
    if (resultado === realizarOperacion()) {
        alert("correcto")
        return true
    } else {
        alert("incorrecto")
        return false
    }
}
document.getElementById("enviar").addEventListener("click", function (event) {
    if (validar() == false) {
        event.preventDefault();
    }
});

