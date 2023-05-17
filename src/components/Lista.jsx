import './Lista.css'
import React from 'react'
import { FaCheck, FaTrashAlt } from "react-icons/fa";

const List = (props) => {
    const listTasks = props.tasks.map(task => {
        return (
            <div className={task.completed ? 'cardTarefa concluida' : 'cardTarefa'} key={task.id}>
                <div className='cardOne'>
                <p>{task.name}</p>
            </div>
            <div className='cardTwo'>
                <button onClick={_ => props.completedTask(task.id)}><i className='check'><FaCheck /></i></button>
                <button onClick={_ => props.deleteTask(task.id)}><i className='apagar'><FaTrashAlt /></i></button>
            </div>
            </div>
        )
    })

    return (
        <div className='lista'>
            {listTasks}
        </div>
    )
}

export default List

