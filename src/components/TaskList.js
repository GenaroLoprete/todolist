import React, { Fragment } from 'react';
import Task from './Task';
//Es mas claro declararlo como const cuando es funcional y conarrwo funcion
//poniendo un poco mas en practica la destructuracion
const TaskList = (props) => {
    return props.tasks.map(({ description, id, completed }, index) => (
        <Fragment key={index}>
            <hr></hr>
            <Task description={description} id={id} completed={completed} deleteTask={props.deleteTask}/>
        </Fragment>

    ));
}
//podemos poner un componente vacio como para indicar que es el padre o importar un fragment que es un componente vacio 
//cumplen la misma funcion
export default TaskList;