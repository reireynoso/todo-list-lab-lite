import React from 'react'

const ToDoCard = (props) => {
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be red and text should say Incomplete 
            */}
          <button onClick={() => props.handleCompleteChange(props.todo)} className={`ui button ${props.todo.completed ? "orange" : "blue"}`}>{props.todo.completed ? "Complete" : "Incomplete"}</button>
        </div>
        
    </div>
    )
}

export default ToDoCard