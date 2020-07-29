
let numberA, numberB, operacion;
let resultado = 0;
let respuesta = '';
let operacionError = false;


do {
    //Ingresa datos
    numberA = parseFloat(prompt('Ingrese un numero'));
    numberB = parseFloat(prompt('Ingrese otro numero'));
    operacion = prompt('Ingrese que operacion quiere realizar:\n Suma: +, Resta: -, Multiplicacion: *, Division: /');

    //Evaluar la operacion
    switch (operacion) {
        case "+":
            resultado = numberA + numberB;
            break;
        case "-":
            resultado = numberA - numberB;
            break;
        case "*":
            resultado = numberA * numberB;
            break;
        case "/":
            resultado = numberA / numberB;
            break;
        default:
            operacionError = true;
            break;
    }
    if (operacionError) {
        alert('Operacion: ' + operacion + ' invalida.');
        operacionError = false;
    } else if (isNaN(resultado)) {
        alert("Error en entrada de datos: " + numberA + ' ' + numberB);
        operacionError = false;
    } else {
        alert("Resultado: " + resultado);
    }
} while (confirm('Desea continuar?'))

