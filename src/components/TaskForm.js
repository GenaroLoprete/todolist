import React from 'react';
class TaskForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description : ""
        }
    }
    submitAddTask = (event) => {
        
        event.preventDefault();

        const{addTask} = this.props;

        const {description} = this.state;

        addTask(description);

        
    }

    changeDescription = event => this.setState({description : event.target.value});

    render() {

        const {description} = this.state;
        return (
            <>
                <h3>Task form (Incomplete...)</h3>
                <form onSubmit={this.submitAddTask}>
                    <div className="row">
                        <div className="col">
                            <input type="text"
                            placeholder="Ingrese una tarea..."
                            className="form-control"
                            value={description}
                            onChange={this.changeDescription}></input>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-block btn-primary">Agregar tarea</button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}
//solo ponemos la funcion si queremos que cuando se renderee se, si no tenemos que poner solo el nombre
export default TaskForm;
