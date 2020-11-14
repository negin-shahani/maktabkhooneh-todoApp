import React, { Component } from 'react'
import { observer } from 'mobx-react'
import todoStore from '../stores/TodoStore'

@observer
class TodoFilters extends Component {

    todoActiveCounter() {
        return todoStore.todos.filter(todo => !todo.completed).length
    }
    todoCompletedCounter() {
        return todoStore.todos.filter(todo => todo.completed).length
    }
    clearCompleted() {
        return (
            <button 
            className="clear-completed"
            onClick={todoStore.clearAllCompleted}
            >
                clear Completed
            </button>
        )
    }
    render() {
        return (
            <div className="footer" >
                <a className="todo-count">
                    {this.todoActiveCounter()} items left
                </a>
                <ul className="filters" >
                    <li>
                        <a
                            className={todoStore.filters === "All" ? 'selected' : ' '}
                            onClick={this.filtersAll}
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            className={todoStore.filters === "Active" ? 'selected' : ' '}
                            onClick={this.filtersActive}>
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            className={todoStore.filters === "Completed" ? 'selected' : ' '}
                            onClick={this.filtersCompleted}>
                            Completed
                        </a>
                    </li>
                    {this.todoCompletedCounter() === 0 ? "" : this.clearCompleted()}
                </ul>
            </div>
        );
    }

    filtersAll() {
        todoStore.filters = 'All'
        console.log(todoStore.filters)
    }
    filtersActive() {
        todoStore.filters = 'Active'
        console.log(todoStore.filters)
    }
    filtersCompleted() {
        todoStore.filters = 'Completed'
        console.log(todoStore.filters)
    }
}

export default TodoFilters