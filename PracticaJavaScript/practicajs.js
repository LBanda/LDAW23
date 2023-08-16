//---------TEMPLATE LITERALS
/*let nombre = "David";
let apellido = "Gilmour";
let instrumento = "Guitarra Electrica"
let formaTradicional = "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Instrumento: " + instrumento;
let templateLiteral = `Nombre: ${nombre}

Apellido: ${apellido}

Instrumento: ${instrumento}`
let templateLiteralTabs = `Nombre: ${nombre}
 Apellido: ${apellido}
    Instrumento: ${instrumento}`
console.log(formaTradicional);
console.log(templateLiteral);
console.log(templateLiteralTabs);
function suma(n1, n2){
 return n1 + n2;
}

let sumaDirecta = `${1 + 2}`;
let sumaFuncion = `${suma(1,2)}`;
console.log(sumaDirecta);
console.log(sumaFuncion);*/
//-------------------------------------

//---------FUNCIONES
function prueba(p1, p2 = "inicializado", p3){
    if(p3){
    console.log(`${p1} ${p2} ${p3}`);
    }else{
    console.log(`${p1} ${p2}`);
    }
   }
   prueba("param1");
   prueba("param1", "param2");
   prueba("param1", "param2", "param3");
   //Las funciones flecha son una version simplificada de una funcion
   // normal, con la diferencia de que no tiene acceso a this o super
   // entre otras limitantes.
   const personajes = [
    'Zelda',
    'Link',
    'Ganon'
   ];
   console.log(personajes.map(personaje => personaje.length));
   //-------------------------------------

   //---------DESESTRUCTURACION DE OBJETOS
let persona = {
    nombre: "David",
    apellido: "Gilmour",
    instrumento: "Guitarra Electrica"
   }
   //De la forma tradicional
   let n = persona.nombre;
   let a = persona.apellido;
   let i = persona.instrumento;
   console.log(n,a,i);
   //Desestructurando el objeto
   let {nombre, apellido, instrumento} = persona;
   console.log(nombre, apellido, instrumento);
   //Se puede definir un alias para las variables
   let {nombre:n1, apellido:a1, instrumento:i1} = persona;
   console.log(n1, a1, i1);
   //Desestructuración con arreglos
   let pinkfloyd = ["The Wall", "The Darkside of the Moon", "The Final Cut"];
   let [album0, album1, album2] = pinkfloyd;
   console.log(album0, album1, album2);
   let[,,album] = pinkfloyd;
   console.log(album);
   //-------------------------------------

   //---------PROMESAS
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Ejecucion asincrona finalizada...");
    resolve();
    //reject();
    }, 3000);
   });
   console.log("Simulando alguna operacion 1");
   //then recibe 2 funciones: la primera se invoca si se ejecutó con resolve,
   //y la segunda si se ejecutó con reject. Se puede utilzar catch y finally
   //para el manejo de errores.
   promesa.then(
    //Funcion que se invoca en resolve
    function(){
    console.log("Ejecucion asincrona finalizada con exito");
    },
    //Funcion que se invoca en reject
    function(){
    console.log("Ejecucion asincrona finalizada con error");
    }
   ).catch((error) => {
    console.warn(error);
   }).finally(() => {
    console.log("finally ejecutado");
   })
   console.log("Simulando alguna operacion 2");
   console.log("Simulando alguna operacion 3");
   //-------------------------------------

   //---------ASYNC Y AWAIT
//es lo mismo hacer esto:
const getConsolaPorIdPromise = (idConsola) => {
    const promesa = new Promise((resolve, reject) => {
    resolve("PlayStation 5 Promise");
    });
    return promesa;
   }
   getConsolaPorIdPromise('ps5').then((mensaje) => {
    console.log(mensaje);
})
//que esto (debido a que async devuelve un Promise, se puede utilizar 'then')
const getConsolaPorIdAsync = async(idConsola) => {
 return "PlayStation 5 Async";
}
getConsolaPorIdAsync('ps5').then((mensaje) => {
 console.log(mensaje);
})
//'await' nos ayuda a manejar el código como si fuera síncrono
const devuelveAlgoAsync = async() => {
 //Se recomienda manejarlo todo dentro de un try-catch
 try{
 //Sin el 'await', fecth estaría regreaando un 'Promise<Response>'. Con el 'await'
 // sólo nos regresa 'Response'. Esto es porque await va esperar a que termine de
 // ejecutarse la promesa, por lo que ya no es necesario recibirla como 'Promise'
 // si no ya directamente el 'Response'.
 //Con await, no se va ejecutar la siguiente línea de código hasta que termine esta.
 const peticion = await fetch('https://jsonplaceholder.typicode.com/todos/1');

 //Ya podemos recuperar el json de la respuesta. Pero como 'json()' también devuelve un
//Promise, podemos utilizar nuevamente 'await'.
 const informacion = await peticion.json();

 console.log(informacion);
 }catch(error){
 console.warn(error);
 //Manejar el error.
 }
}
//Mandamos llamar la función.
devuelveAlgoAsync();
//-------------------------------------

//---------FETCH
const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1');
//'fetch' devuelve un Promise<Response>, donde 'Response' lo vamos
// a recibir como parámetro, en este caso 'respuesta'
peticion.then ( (respuesta) => {
 console.log(respuesta);
 //La respuesta también viene en un Promise, la cual podemos recuperar
 // con el método 'json'
 respuesta.json().then( (datos) => {
 //En 'datos' tenemos ya la información de la respuesta del API, con
 // la cual ya podemos trabajar en base a lo que se necesite.
 console.log(datos);
 })
})
.catch( (error) => {
 console.warn(error);
})
//-------------------------------------

//---------CLASES
class Videojuego{
    nombre;
    developer;
    lanzamiento;
    constructor(nombre, developer, lanzamiento){
    this.nombre = nombre;
    this.developer = developer;
    this.lanzamiento = lanzamiento;
    }
    rating(){
    return 5.7;
    }
   }
   let tlou2 = new Videojuego("The Last of Us 2", "Naughty Dog", 2020);
   console.log(tlou2);
   console.log(tlou2.rating());
   //-------------------------------------
