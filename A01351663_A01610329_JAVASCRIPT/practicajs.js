// Jose Luis Banda A01610329
// Saúl Romero A01351663

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

class CalculadoraPromise {
    sumar(num1, num2, factor = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const resultado = num1 + num2;
                if (isNaN(resultado)) {
                    reject("Operación inválida: sumar");
                } else {
                    resolve(resultado * factor);
                }
            }, 1000); // Simulamos 1 segundo de tiempo de ejecución
        });
    }

    restar(num1, num2, factor = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const resultado = num1 - num2;
                if (isNaN(resultado)) {
                    reject("Operación inválida: restar");
                } else {
                    resolve(resultado * factor);
                }
            }, 2000); // Simulamos 2 segundos de tiempo de ejecución
        });
    }

    multiplicar(num1, num2, factor = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const resultado = num1 * num2;
                if (isNaN(resultado)) {
                    reject("Operación inválida: multiplicar");
                } else {
                    resolve(resultado * factor);
                }
            }, 3000); // Simulamos 3 segundos de tiempo de ejecución
        });
    }

    dividir(num1, num2, factor = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num2 === 0) {
                    reject("No se puede dividir por cero");
                    return;
                }

                const resultado = num1 / num2;
                if (isNaN(resultado)) {
                    reject("Operación inválida: dividir");
                } else {
                    resolve(resultado * factor);
                }
            }, 4000); // Simulamos 4 segundos de tiempo de ejecución
        });
    }
}

// Ejemplo de uso
const calculadoraPromise = new CalculadoraPromise();

calculadoraPromise.sumar(5, 3)
    .then(result => console.log(`La suma es: ${result}`))
    .catch(error => console.error(error));

calculadoraPromise.restar(10, 7, 2)
    .then(result => console.log(`La resta es: ${result}`))
    .catch(error => console.error(error));

calculadoraPromise.multiplicar(4, 6)
    .then(result => console.log(`La multiplicación es: ${result}`))
    .catch(error => console.error(error));

calculadoraPromise.dividir(15, 3, 3)
    .then(result => console.log(`La división es: ${result}`))
    .catch(error => console.error(error));

      


  // Función para obtener y mostrar los datos de un endpoint 
async function fetchDataAndDisplay(endpoint) {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Endpoint que sera utilizado
  const endpoint = "https://jsonplaceholder.typicode.com/posts/1/comments";
  
  // Mostrar el endpoint desestructurado en la consola
  (async () => {
    const { postId, id, name, email, body } = await fetchDataAndDisplay(endpoint);
  
    console.log("ID:", postId);
    console.log("ID Comentario:", id);
    console.log("Nombre:", name);
    console.log("Mail:", email);
    console.log("Descripción:", body);
  })();