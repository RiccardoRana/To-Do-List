import React from 'react'

const Todo = (props) => {
    return (
        <input type="checkbox" key={props.id}>{props.name}</input>
    )
}

export default Todo