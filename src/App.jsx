import './App.css'
import React from 'react'

import Form from './components/Form'

const App = props => {
    return (
        <div>
            <h1 className='tituloTodo'>Todo List</h1>
            <div className='App'>
                <Form />
            </div>
        </div>
        
    )
}

export default App

