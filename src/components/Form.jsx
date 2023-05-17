import './Form.css'
import React, { useState } from 'react'

const Form = props => {
    const [nameTask, setNameTask] = useState('')

    const addTask = () => {
        if (!nameTask) {
            return
        }

        const newTask = { id: Date.now(), name: nameTask, completed: false }
        props.addNewTask(newTask)
        setNameTask("")
    }

    const keyEnter = (e) => {
        if (e.keyCode === 13) {
            addTask()
        }
    }

    return (
        <div className='content'>
            <div className='form'>
                <input
                    className='inputTarefa'
                    placeholder='Digite uma tarefa'
                    value={nameTask}
                    onChange={e => setNameTask(e.target.value)}
                    onKeyUp={e => keyEnter(e)}
                />
                <button
                    className='button'
                    onClick={_ => addTask()}
                >
                    Add
                </button>
            </div>
            <div className="status">
                <div>Tarefas criadas <span className='tarefasStatus'>{props.tasksAmount}</span></div>
                <div>Concluídas <span className='tarefasStatus'>{props.finishedTasks} de {props.tasksAmount}</span></div>
            </div>
        </div>
    )
}

export default Form
