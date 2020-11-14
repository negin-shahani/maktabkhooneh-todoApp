import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoItem extends Component {
    onToggle = () => {
        this.props.todo.toggle()
    }
    itemDestroy = () => {
        this.props.todo.destroy()
    }
    render() {
        const { todo } = this.props /*a todo recieved*/
        return (
            <div>
                <li className={todo.completed ? 'completed' : ' '} >
                    <div className="view" >
                        <input
                            onChange={this.onToggle}
                            type="checkbox"
                            className="toggle"
                            value="on"
                            checked={todo.completed}
                        />
                        <label>{todo.title} </label>
                        <button className="destroy" onClick={this.itemDestroy} ></button>
                    </div>
                </li>
            </div>
        );
    }

}
export default TodoItem