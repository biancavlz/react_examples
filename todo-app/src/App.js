import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

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

    //function created to be passed as a prop, and handling the submission
    addTodo = todo => {
        todo.id = Math.random()
        let todos = [...this.state.todos, todo] //create a new array, adding a new todo, passed through argument

        this.setState({
            todos //or todos: todos
        })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}

export default App
