import React, { Component } from 'react'

class App extends Component {
    state = {
        todos: [{ id: 1, content: 'go shopping' }, { id: 2, content: 'clean the flat' }]
    }
    render() {
        return <div className="App" />
    }
}

export default App
