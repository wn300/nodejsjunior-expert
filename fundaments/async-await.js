/**
 * async and await
 */

// let getNombreASYNC = async () => {
//     // throw new Error('Error controlado desde ASYNC')
//     return 'wilmer'
// }


// getNombreASYNC().then((name) => {
//     console.log(name)
// }).catch((err) => {
//     console.log('Error controlado', err)
// })


let getNombreASYNCAWAIT = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('david');
        }, 3000);

    });
};

let saludo = async () => {
    let nombre = await getNombreASYNCAWAIT();

    return `Hey ${nombre}`
}

saludo().then((result) => {
    console.log(result);
});