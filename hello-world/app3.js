console.log('Inicio');

setTimeout(() => {
    console.log('Primer');
}, 3000);

setTimeout(() => {
    console.log('segundo');
}, 0);

setTimeout(() => {
    console.log('tercer');
}, 0);

console.log('Fin');
