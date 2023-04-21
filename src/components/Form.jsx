import './Form.css'
import React, { useState } from 'react'
import { FaCheck, FaTrashAlt } from "react-icons/fa";

const Form = props => {
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [tarefas, setTarefas] = useState([])

    const statusConcluida = tarefas.reduce((acc, tarefa) => {
        if(tarefa.concluida) {
            acc++
        }
        return acc
    }, 0)

    console.log(tarefas)

    const listarTarefas = tarefas.map(tarefa => {
        return (
            <div className={tarefa.concluida ? 'cardTarefa concluida' : 'cardTarefa'} key={tarefa.id}>
                <div className='cardOne'>
                    <p>{tarefa.nome}</p>
                </div>
                <div className='cardTwo'>
                    <button onClick={_ => tarefaConcluida(tarefa.id)}><i className='check'><FaCheck /></i></button>
                    <button onClick={_ => tarefaApagada(tarefa.id)}><i className='apagar'><FaTrashAlt /></i></button>
                </div>
            </div>
        )
    })

    const adicionaTarefa = () => {
        if (!nomeTarefa) {
            return
        }

        const novaTarefa = { id: Date.now(), nome: nomeTarefa, concluida: false }
        setTarefas([...tarefas, novaTarefa])
        setNomeTarefa("")
    }

    const tarefaConcluida = (id) => {
        const novasTarefas = tarefas.map(tarefa => {
            if (id === tarefa.id) {
                return { ...tarefa, concluida: !tarefa.concluida }
            } else {
                return tarefa
            }
        })
        setTarefas(novasTarefas)
    }

    const tarefaApagada = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    const teclaEnter = (e) => {
        if (e.keyCode === 13) {
            adicionaTarefa()
        }
    }

    return (
        <div className='content'>
            <div className='form'>
                <input
                    className='inputTarefa'
                    placeholder='Digite uma tarefa'
                    value={nomeTarefa}
                    onChange={e => setNomeTarefa(e.target.value)}
                    onKeyUp={e => teclaEnter(e)}
                />
                <button
                    className='button'
                    onClick={_ => adicionaTarefa()}
                >
                    Add
                </button>
            </div>
            <div className="status">
                <div>Tarefas criadas <span className='tarefasStatus'>{tarefas.length}</span></div>
                <div>Concluídas <span className='tarefasStatus'>{statusConcluida} de {tarefas.length}</span></div>
            </div>
            <div className='lista'>
                {listarTarefas}
            </div>
        </div>
    )
}

export default Form
