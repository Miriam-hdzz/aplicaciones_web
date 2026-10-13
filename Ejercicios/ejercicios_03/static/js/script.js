//  Estructura de una funcion base o tradicional
function sumar(numero1, numero2 ) {
    return numero1 + numero2;
}

//Estructura con flecha
const restar2 = (numero1, numero2) => numero1 - numero2;

//Tipos de datos Primitivos

const texto = "Hola Mundo";
const numero = 7;
const booleano = true;
const nulo = null;

//Arreglos o listas
const personas = ["Miriam", "Miranda", "Marifer"];

//Objetos literales - Diccionarios en python
const persona = {
    nombre: "Miriam",
    apellido: "Hernandez",
    edad: 20,
    activo: true
};

// Variables
//const: Variables que no van a ser reasignados
//let: Variables cuyo valor cambiara en el tiempo
//Var: Obsoleto, variable que cambia de valor

console.log("persona:", personas);
console.log("Texto:", texto);
console.log("Número:", numero);
console.log("Booleano:", booleano);
console.log("Nulo:", nulo);

console.log("Suma:", sumar(5, 7));
console.log("Resta:", restar2(5, 7));

const parrafo1 = document.getElementById("parrafo1");
console.log(parrafo 2:
parrafo1.textContent = "Hola soy un parrafo modificado desde JavaScript";