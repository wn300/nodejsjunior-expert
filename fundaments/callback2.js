/**
 * Callback 2
 */

let empleados = [{
    id: 1,
    nombre: 'wilmer',
}, {
    id: 2,
    nombre: 'david',
}, {
    id: 3,
    nombre: 'chimuelo',
}]


let salarios = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 2000,
}]


let getEmpleado = (id, callback) => {
    let empleado = empleados.find((empleado) => empleado.id === id);

    if (!empleado) {
        callback(`No se encuentra el emplado con id ${id}`);
    } else {
        callback(null, empleado);
    }
}

let getSalario = (empleado, callback) => {
    let salario = salarios.find((salario) => salario.id === empleado.id);

    if (!salario) {
        callback(`No se encuentra el salario del empleado ${empleado.nombre}`);
    } else {
        callback(null, { ...empleado, ...salario });
    }
}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, empleadoSalario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El empleado ${empleadoSalario.nombre} tiene un salario de ${empleadoSalario.salario}`);
    });
})
