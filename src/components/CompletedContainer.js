import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    return (
        <div>
            <h1>Completed Todos</h1>
            {/* Render ToDo Card for each ToDo */}
             {/* Which Array method can you use? */}
             {props.todos.map(todo => <ToDoCard handleCompleteChange={props.handleCompleteChange} todo={todo}/>)}
        </div>
    )
}

export default CompletedContainer