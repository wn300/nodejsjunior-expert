const { crearArchivo } = require('./multiplicar/multiplicar')

// let argv = process.argv;
// let base = argv[2].split('=')[1];

let argv = process.argv;
let base = argv[2].split('=')[1];

// console.log(process.argv);


crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(error => console.log(error));
