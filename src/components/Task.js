import React from "react";
class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false, 
      
    };
  }

  markAsDone = () => this.setState({ done: true });

  deleteTask = (id) => this.props.deleteTask(id)

  getColorFromStatus = () => (this.state.done ? "success" : "warning");

  changeState = () => {
    this.setState({done : !this.state.done})
  }

  render() {
    const { description } = this.props;
    const { done } = this.state;
    const {id} = this.props;
    //si uso las comillas francesas puedo insertar codigo dentro
    return (
      <div className={`alert alert-${this.getColorFromStatus()}`}>
        {description}
        {!done && ( //Es lo mismo que yo haga un if pero sin un else
          <button
            type="button"
            className="close"
            aria-label="Close"
            style={{ outline: "none" }}
            onClick={this.markAsDone}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
        <button
          type="button"
          className="close"
          aria-label="Delete"
          style={{ outline: "none" }}
          onClick={() => this.props.deleteTask(id)} //Tengo que definir los eventos asi no se ejecutan solos al renderearse el elemento
        >
          <span aria-hidden="true">Borrar</span>

        </button>
        <input type="checkbox" onChange={() => this.changeState()}></input>
      </div>
    );
  }
}

export default Task;
