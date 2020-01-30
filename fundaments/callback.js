/**
 * Callback
 */

let getUserById = (id, callback) => {
    let user = {
        name: 'wil',
        id
    }

    if (id === 10) {
        callback(`Error el usuario con id ${id} no existe en BD`);
    } else {
        callback(null, user)
    }
}

getUserById(11, (err, user) => {

    if (err) {
      return  console.log(err);
    }
    console.log('Usuario de la base de datos', user);

})