import { observable, action, computed } from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = []
    lastID = 0
    @observable filters = 'All'

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++))
    }

    @action
    clearAllCompleted(){
        todoStore.todos = todoStore.todos.filter(todo => !todo.completed);
    }
    
}

const todoStore = new TodoStore()
export default todoStore
