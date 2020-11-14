import {observable, action} from 'mobx'

class TodoModel {
    store
    id
    @observable title
    @observable completed

    constructor(store,title,completed,id){
        this.id = id
        this.store = store
        this.title = title
        this.completed = completed
    }

    
    @action
    toggle(){
        this.completed = !this.completed
    }

    @action
    destroy(){
        this.store.todos.remove(this)
    }
}


export default TodoModel