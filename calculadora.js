
let num1, num2;
let operacion;


function realizarOperacion(num1, num2, operacion) {
    if (operacion === 1) {
        return num1 + num2;
    } else if (operacion === 2) {
        return num1 - num2;
    } else if (operacion === 3) {
        return num1 * num2;
    } else if (operacion === 4) {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}


while (true) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = parseInt(prompt(
        "Ingrese la operación a realizar (1.suma, 2.resta, 3.multiplicacion, 4.division) o '5.para terminar:"
    ));

    if (operacion === 5) {
        console.log("¡Gracias por usar el programa!");
        alert("¡Gracias por usar el programa!");
        break;
    }

    const resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la operación es: ${resultado}`);
    alert(`El resultado de la operación es: ${resultado}`);
}
