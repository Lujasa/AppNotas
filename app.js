const path = require('path');
const fs = require('fs')
const accion = process.argv[2];
const rutaJson = path.resolve(__dirname, 'data/tareas.json');
const tareas = fs.readFileSync(rutaJson, {encoding: 'utf-8'})
const myJson = JSON.parse(tareas);

//DESAFIO 1
console.log("Listado de Tareas:");
myJson.forEach(tareas => {
    console.log("Tarea:",tareas.titulo,"Estado:", tareas.estado);
})

//DESAFIO 2

//IF ELSE

    if (accion == "listar"){
            console.log("Listado de Tareas (con if):");
            myJson.forEach(tareas => {console.log("Tarea:",tareas.titulo,"Estado:", tareas.estado);
            });
            
        }else if (accion == null){
            console.log("Atención - Tienes que pasarme una acción (con if), las acciones disponibles son: listar")
        }else {
            console.log("No entiendo qué quieres hacer (con if), las acciones disponibles son: listar")
        }
   
//SWITCH
switch (accion){
            case 'listar':
                console.log("Listado de Tareas (con switch):");
                myJson.forEach(tareas => {console.log("Tarea:",tareas.titulo,"Estado:", tareas.estado);
                });
            break;
            case (accion && !null):
                console.log("Atención - Tienes que pasarme una acción (con switch), las acciones disponibles son: listar")
            break;
            default:
                console.log("No entiendo qué quieres hacer (con switch), las acciones disponibles son: listar")
            break;
            }