// const numbers = [3,7,9,10]
// console.log(numbers[2]);
// console.log(numbers[0]);
// for (let index = numbers.length -1; index >= 0; index--) {
// // El numero en el que estoy es :
//     // console.log("El numero en el que estoy es: "+ numbers[index]);
//     console.log(`El numero en el que estoy es: ${numbers[index]}`);

// }
// // const myObject = {
// //     name:"Jona"
// // }
// // myObject.name= "Sofi"
// // myObject = {
// //     name:"Sofia"
// // }

// const vueltas = [1,2,3,4,5,6,7,8,9,10];

// // for (let i = 0; i < vueltas.length; i++) {
// //        console.log('Vuelta nº ' + vueltas[i]);
// // }

// let i = 0;

// while (i < vueltas.length) {
//     //    console.log("Vuelta nº " + vueltas[i]);
//        i++;
// }

// // for (let index = 0; index < array.length; index++) {
// //     const vuelta =vueltas[index];

// // }
// for (let vuelta of vueltas) {
//     //    console.log("Vuelta nº " + vuelta);
// }

// const person = { fname: "John", lname: "Doe", age: 25 };
//     //  person."fname"
//     // person["fname"]
// for (let x in person) {
//        console.log(typeof x)
// }
// // for (const vuelta in vueltas) {
// //     console.log(vueltas[vuelta]);
// // }

// Dado un array de números. Muestra en un bucle sus valores por consola.

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }
// let a = 1;
// // a = a+1
// // a++
// // a = a + 1;
// // console.log(a);
// for (let index = 0; index < 10; index = index + 2) {
//   console.log(index);
// }

const numbers = [5, 8, 1, 4, 7];

// Utilizando el array del ejercicio anterior muestra sólo los números cuyo valor sea mayor de 5.

// for (let index = 0; index < numbers.length; index++) {
//   //   if (numbers[index] > 5) {
//   //     console.log(numbers[index]);
//   //   }
//   if (numbers[index] == 1) {
//     // index--
//   }
//   console.log(numbers[index]);
//   // numbers[index] > 5 && console.log(numbers[index])
// }

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Utiliza el bucle for of.
const personasMayor25 =[]

for (const persona of gente) {
    if(persona.edad >25){
        personasMayor25.push(persona)
    }
}
console.log(personasMayor25);

// Crea un array con la gente que empieza por J. Utiliza el bucle for of y muéstralo por consola.
const genteEmpiezaJ = []
for (const persona of gente) {
    if(persona.nombre[0] === "J"){
        genteEmpiezaJ.push(persona)
    }
}

console.log(genteEmpiezaJ);

