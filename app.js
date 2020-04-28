const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //esto es una destructuracion

let comando = argv._[0]; //_ para hacer referencia al arreglo

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//process.argv nos devuelve la ubicacion de node y el path de este archivo 'C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\It-Factory\\Desktop\\node\\03-bases-node\\app.js'

//para enviar parametros desde la consola
// let argv = process.argv;
// let parametro = argv[2]; //como quiero el 3er parametro, tengo que poner 2. Los arreglos en js comienzan en cero
// let base = parametro.split('=')[1]; //'--base=5' si pongo [1] devuelve solo la posicion 2

// let argv2 = process.argv;

// multiplicar.crearArchivo pero aqui hay que estar utilizando el nombre del paquete