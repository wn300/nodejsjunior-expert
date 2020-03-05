let fs = require("fs");

let crearArchivo = base => {
  return new Promise((resolve, reject) => {
    let datos = "";

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }

    for (let index = 0; index <= 10; index++) {
      datos += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(`tablas/tabla del ${base}.txt`, datos, err => {
      if (err) reject(err);
      else resolve(`tabla del ${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo
};
