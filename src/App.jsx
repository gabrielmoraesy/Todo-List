import './App.css'
import React, { useState } from 'react'

import Form from './components/Form'
import Lista from './components/Lista'

const App = props => {
    const [tasks, setTasks] = useState([])
    const addNewTask = (newTask) => setTasks([...tasks, newTask])
    
    const tasksAmount = tasks.length
    const finishedTasks = tasks.reduce((acc, task) => {
        if (task.completed) {
            acc++
        }
        return acc
    }, 0)

    const completedTask = (id) => {
        const newsTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            } else {
                return task
            }
        })
        setTasks(newsTasks)
    }

    const deleteTask = (id) => {
        const newsTasks = tasks.filter(task => task.id !== id)
        setTasks(newsTasks)
    }

    return (
        <div>
            <h1 className='tituloTodo'>Todo List</h1>
            <div className='App'>
                <Form addNewTask={addNewTask} tasksAmount={tasksAmount} finishedTasks={finishedTasks} />
                <Lista tasks={tasks} completedTask={completedTask} deleteTask={deleteTask} />
            </div>
        </div>

    )
}

export default App

