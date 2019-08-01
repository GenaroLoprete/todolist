import React, { Fragment } from 'react';
//Es mas claro declararlo como const cuando es funcional y conarrwo funcion
//poniendo un poco mas en practica la destructuracion
const TaskList = ({ tasks }) => {

    return tasks.map(({ description }, index) => (
        <Fragment key={index}>
            <hr></hr>
            <div className="row alert alert-warning">
                {description}
            </div>
        </Fragment>

    ));
}
//podemos poner un componente vacio como para indicar que es el padre o importar un fragment que es un componente vacio 
//cumplen la misma funcion
export default TaskList;