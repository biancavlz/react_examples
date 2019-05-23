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

        //resets the content to empty string,
        //cleans the input value attribute after the form is being submitted
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo
