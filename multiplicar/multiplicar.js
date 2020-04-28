//requireds
const fs = require('fs'); //esta libreria 'fs' ya existe ne node y no hay que hacer nada mas
//const fs = require('express'); //esta no existe en node pero se instala, otras personas hicieron por nosotros
//const fs = require('./fs'); //nosotros mismos escirbimos y deberian estar en algun lado del proyecto

const colors = require('colors');

//gracias al ECS6 se puede poner por default un valor limite = 10. Para este caso no es necesario ya que en el yargs esta definido
let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('==============='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido como base ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido como limite ${limite} no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(`${data}`);

    })

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un numero`);
            return; //para que no siga corriendo el codigo
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //data contiene la tabla de multiplicar hasta el 10 segun la base entrada
        fs.writeFile(`tablas/tabla-${ base } al ${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });
    });
}


// es una forma de exportarlo, la otra forma es en lugar de definir la funcion con let, seria con module.exports.CrearArchivo
//para Fernando es mejor asi porque cuando son varias funciones solo hay q agregarlas aqui
module.exports = {
    // crearArchivo: crearArchivo  //gracias a EcmaScript6 ya no hace falta ponerlo doble
    crearArchivo,
    listarTabla
}