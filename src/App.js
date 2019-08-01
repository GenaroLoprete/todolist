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

  render() {
    const { tasks } = this.state;
    return (
      <div className="container mt-5">
        <TaskForm>


        </TaskForm>
        <TaskList tasks={tasks}>

        </TaskList>
      </div>
    );
  }
}

export default App;
