// Suma
const a=200;
const b=700;
const suma=a+b
alert("El resultado de la suma es: "+ suma);

// Resta
const x=150;
const y=200
const resta=x-y;
alert("El resultado de la resta es: "+ resta);

// Mayusculas y Minusculas
const mensaje = "La Voz De Tu Cabeza Siempre Tiene El Mismo Volumen";
console.log(mensaje); //Sin cambios
console.log(mensaje.toUpperCase()); //Trasnformado a mayúsculas
console.log(mensaje.toLowerCase()); //Trasnformado a minúsculas

// Quitando espacios vacios
const texto = "  La Voz De Tu Cabeza Siempre Tiene El Mismo Volumen    ";
console.log(texto);
console.log(texto.trim());

// Separar palabras
const animales = "palabra1 palabra2 palabra3 paabra4 palabra5";
const arreglo = animales.split(" ");
console.log(animales);
console.log(arreglo);

// Separar Correo
const email = "luisfelipe14@live.com.mx";
console.log(email);
console.log(email.split("@"));