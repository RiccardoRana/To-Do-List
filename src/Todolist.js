import React from 'react'
import './todoList.css'
import ButtonGeneric from './ButtonGeneric';
import { useState, useRef } from 'react';
import { FaTrashAlt } from "react-icons/fa";


const Todolist = (props) => {

    const [state, setState] = useState({
        value: '',
        todos: [],
        errorMessage: '',
        borderColor: 'green'
    })

    let inputSpesa = useRef();


    const addItem = () => {
        let spesa = inputSpesa.current.value;
        let obj = {
            stringValue: spesa,
            id: Math.floor(Math.random() * 10000),
            eliminate: false
        }
        if (obj.stringValue === '') {
            const errorMessage = 'Errore, scrivi qualcosa!⛔️'
            setState({ borderColor: 'red', errorMessage: errorMessage, todos: state.todos })
        } else {
            console.log(obj);
            setState({ todos: state.todos.concat(obj) })
            inputSpesa.current.value = null;
        }
    }

    const eliminateToDo = ({ id }) => {
        setState({ todos: state.todos.filter((todo) => todo.id !== id) })
    }



    return (
        <>
            <h1 className='title'>Todolist</h1>
            <input type="text" className='input' style={{ borderBlockColor: state.borderColor }} placeholder={props.placeholder} ref={inputSpesa} />
            <ButtonGeneric
                label="Aggiungi"
                backgroundColor='green'
                onClick={addItem}
            />
            <p className='testo'> {state.errors} </p>
            {<p className='errorMessage'>{state.errorMessage} </p>}
            {state.todos.map((todo) =>
                <div className='mthelper' key={todo.id}>
                    <div className='todos'>
                        <p> {todo.stringValue} <FaTrashAlt className='trash' onClick={() => eliminateToDo(todo)} /> </p>
                    </div>
                </div>)
            }
        </>

    )

}

export default Todolist;