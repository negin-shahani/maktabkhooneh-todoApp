import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import TodoEntry from './component/todoEntry'
import TodoItems from './component/todoItems'
import TodoFilters from './component/todoFilters'

@observer
class App extends Component {
    render() {
        return (
            <div id="todoapp" className="todoapp" >
                <TodoEntry />
                <TodoItems/>
                <TodoFilters/>
            </div>
        );

    }
}


export default App;
