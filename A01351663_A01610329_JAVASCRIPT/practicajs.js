class Calculadora {
    sumar(num1, num2, factor = 1) {
        const resultado = num1 + num2;
        console.log(`La suma de ${num1} y ${num2} es: ${resultado * factor}`);
    }

    restar(num1, num2, factor = 1) {
        const resultado = num1 - num2;
        console.log(`La resta de ${num1} y ${num2} es: ${resultado * factor}`);
    }

    multiplicar(num1, num2, factor = 1) {
        const resultado = num1 * num2;
        console.log(`La multiplicación de ${num1} y ${num2}, y multiplicado por ${factor} es: ${resultado * factor}`);
    }

    dividir(num1, num2, factor = 1) {
        if (num2 === 0) {
            console.log("No se puede dividir por cero.");
            return;
        }

        const resultado = num1 / num2;
        console.log(`La división de ${num1} entre ${num2}, y multiplicado por ${factor} es: ${resultado * factor}`);
    }
}

// Ejemplo de uso
const calculadora = new Calculadora();

calculadora.sumar(5, 3);
calculadora.restar(10, 7, 2);
calculadora.multiplicar(4, 6);
calculadora.dividir(15, 3, 3);
