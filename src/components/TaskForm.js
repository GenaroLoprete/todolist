import React from 'react';
function TaskForm(props) {
    return (
        <>
            <h3>Task form (Incomplete...)</h3>
            <form>
                <div className="row">
                    <div className="col">

                        <input type="text" placeholder="Ingrese una tarea..." className="form-control"></input>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-block btn-primary">Agregar tarea</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default TaskForm;
