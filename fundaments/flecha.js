/**
 * funcion flecha
 */

// let pruebaSuma = (a, b) => {
//     return a + b;
// };

// let pruebaSuma = (a, b) =>  a + b;


// console.log(pruebaSuma(10, 15));

// function saludar() {
//     return 'hola mundo';
// }

// let saludar = () => { return 'hola mundo'};


// let saludar = () => 'hola mundo';

// console.log(saludar());


// let saludar = nombre => `Hola ${nombre}`;

// console.log(saludar('wil'));


let yoFlecha = {
    nombre: 'Wilmer',
    apellido: 'mancera',
    perro: 'chimuelo',
    getYo: () => `${this.nombre} ${this.apellido} y mi perro se llama ${this.perro}`
}

 console.log(yoFlecha.getYo());