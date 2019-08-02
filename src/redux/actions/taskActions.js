//vamos a poner todas las acciones vinculadas a las tareas, ejemplo crud
//siempre retornan un json con un atributo type
export function createTask(task){
    return {
        type: "CREATE_TASK", //standar, lo mismo que la funcion, separado con guisn bajo y mayusculas
        task
    }
}