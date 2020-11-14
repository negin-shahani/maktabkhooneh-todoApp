import React, { Component } from 'react'
import todoStore from '../stores/TodoStore'

class TodoEntry extends Component {
    state = {
        value: ""
    }

    handleKeyDown = event => {
        if (event.keyCode !== 13){
            return;
        }
        event.preventDefault()
        todoStore.addTodo(this.state.value)
        event.target.value=""
    }

    render() {
        return (
            <div>
                <header className="header" >
                    <h1>todo</h1>
                    <input
                        onChange={event => this.setState({ value: event.target.value })}
                        onKeyDown={
                            event => this.handleKeyDown(event)
                        }
                        type="text"
                        className="new-todo"
                        placeholder="What needs to be done?"
                    />
                </header>
            </div>
        );
    }

}
export default TodoEntry