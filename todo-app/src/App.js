import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {
    state = {
        todos: [{ id: 1, content: 'go shopping' }, { id: 2, content: 'clean the flat' }]
    }

    deleteTodo = id => {
        console.log(id)
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id //return a new array excluding the todo with the id being clicked
        })
        this.setState({ todos }) //or this.setState({ todos: todos })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App
