//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        //console.log('Comando crear');
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let item of listado) {
            console.log('=============== LISTADO =================');
            console.log(item);
            console.log('=========================================');
        }
        break;

    case 'actualizar':
        console.log('Comando actualizar');
        break;

    default:
        console.log('Comando no definido');
}