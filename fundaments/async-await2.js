let empleados2 = [{
    id: 1,
    nombre: 'wilmer',
}, {
    id: 2,
    nombre: 'david',
}, {
    id: 3,
    nombre: 'chimuelo',
}];


let salarios2 = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 2000,
}];


let getEmpleadoPromise = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find((empleado) => empleado.id === id);

        if (!empleado) {
            reject(`No se encuentra el emplado con id ${id}`);
        } else {
            resolve(empleado);
        }
    });
}

let getSalarioPromise = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find((salario) => salario.id === empleado.id);

        if (!salario) {
            reject(`No se encuentra el salario del empleado ${empleado.nombre}`);
        } else {
            resolve({ ...empleado, ...salario });
        }
    });
}

getEmpleadoPromise(1).then(empleado => {
    return getSalarioPromise(empleado);
}).then(empleadoSalario => {
    console.log(`El empleado ${empleadoSalario.nombre} tiene un sueldo de ${empleadoSalario.salario}`);
}).catch(err => {
    console.log(err);
});