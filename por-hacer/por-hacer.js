const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (error) => {
        if (error) throw new Error('No se pudo guardar el JSON-File');
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion, // descripcion : descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


let getListado = () => {
    cargarDB()
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado
}