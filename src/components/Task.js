import React from 'react';
class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        }
    }

    markAsDone = () => this.setState({ done: true });

    getColorFromStatus = () => this.state.done ? "success" : "warning"
    render() {
        const { description } = this.props;
        const { done } = this.state;
        //si uso las comillas francesas puedo insertar codigo dentro
        return (<div className={`alert alert-${this.getColorFromStatus()}`}> 
            {description}
            {
                !done
                && //Es lo mismo que yo haga un if pero sin un else
                <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    style={{ outline: "none" }}
                    onClick={this.markAsDone}>
                    <span aria-hidden="true">&times;</span>
                </button>
            }
        </div>);
    }
}

export default Task;