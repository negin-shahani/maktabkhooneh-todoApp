import React, { Component } from 'react'
import TodoItem from './todoItem'
import todoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoItems extends Component {
    render() {
        return (
            <div>
                <section className="completed" >
                    <ul className="todo-list" >
                        {
                            this.applyFilter().map(todo => {
                                return (
                                    <TodoItem todo={todo} />
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }

    applyFilter() {
        return todoStore.todos.filter(todo => {
            switch (todoStore.filters) {
                case 'All':
                    return true
                case 'Active':
                    return !todo.completed
                case 'Completed':
                    return todo.completed;
            }
        })
    }

}
export default TodoItems