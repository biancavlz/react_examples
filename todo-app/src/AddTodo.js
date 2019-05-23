import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = e => {
        //console.log(e)
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault() //prevents the page being reloaded when submitting the form
        //console.log(this.state)
        this.props.addTodo(this.state) //function passed as prop
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo
