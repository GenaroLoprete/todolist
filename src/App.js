import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

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
    let { tasks } = this.state;

    let newTasks =[...tasks];
    newTasks.push({description});

    this.setState({tasks: newTasks})
   //this.setState({ tasks: [...tasks].push({ description: description }) });
    //es mejor practica asignarle un objeto clonado con el dato nuevo a trabajar sobre el mismo, mas eficiente
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="container mt-5">
        <TaskForm addTask={this.addTask}>


        </TaskForm>
        <TaskList tasks={tasks}>

        </TaskList>
      </div>
    );
  }
}

export default App;
