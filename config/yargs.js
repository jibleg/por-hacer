const argv = require('yargs')
    .command('crear', 'Crea Listado', {
        descripcion: {
            demand: true,
            alias: 'c',
            desc: 'Descripcion de la tarea por ejecutar'
        }
    })
    .command('listar', 'Litado de tareas', {
        descripcion: {
            demand: true,
            alias: 'l',
            desc: 'Listado de tareas por ejecutar'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como comando completado o pendiente la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}