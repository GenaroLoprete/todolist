import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as taskActions from './redux/actions/taskActions';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //de entrada inicializamos el estado del componente
      tasks: [
        { description: "Oslo" },
        { description: "Tokyo" },
        { description: "Denver" },
        { description: "Cincinatti" },
      ]
    }
  }
  addTask = (description) => {
    //   let { tasks } = this.state;

    //   let newTasks =[...tasks];
    //   newTasks.push({description});

    //   this.setState({tasks: newTasks})
    //  this.setState({ tasks: [...tasks].push({ description: description }) });
    //es mejor practica asignarle un objeto clonado con el dato nuevo a trabajar sobre el mismo, mas eficiente

    this.props.dispatch(taskActions.createTask({description}));
  }

  deleteTask = (id) => {
    
    //es mejor practica asignarle un objeto clonado con el dato nuevo a trabajar sobre el mismo, mas eficiente

    this.props.dispatch(taskActions.deleteTask(id));
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="container mt-5">
        <TaskForm addTask={this.addTask}>


        </TaskForm>
        <TaskList tasks={tasks} deleteTask={this.deleteTask}>

        </TaskList>
      </div>
    );
  }
}
//mapea el state a props (literal)
function mapStateToPros(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToPros)(App);
//podemos probar  para seguir practicando, hacer el remove con este metodo