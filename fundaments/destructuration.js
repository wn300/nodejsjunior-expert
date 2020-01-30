/**
 * Destructuracion
 */

let yo = {
    nombre: 'Wilmer',
    apellido: 'mancera',
    perro: 'chimuelo',
    getYo: function () {
        return `${this.nombre} ${this.apellido} y mi perro se llama ${this.perro}`
    }
}

 console.log(`primero ${yo.getYo()}`);

let { nombre: miNombre, apellido, perro } = yo;

 console.log(`segundo ${miNombre} ${apellido} y mi perro se llama ${perro}`);

