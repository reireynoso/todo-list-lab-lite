import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'

const todosArr = [
  {
    "title": "Eat",
    "completed": true
  },
  {
    "title": "Sleep",
    "completed": false
  },
  {
    "title": "Listen to Eric talk about how much he loves Fortnite",
    "completed": false
  },
  {
    "title": "Workout",
    "completed": true
  },
  {
    "title": "Lecture",
    "completed": false
  },
  {
    "title": "Code",
    "completed": true
  }
]

class App extends React.Component{

  state = {
    todos: todosArr
  }

  handleCompleteChange = (taskObj) => {
    // console.log(taskObj)
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.title === taskObj.title){
        let updateTodo = {
          ...todo,
          completed: !todo.completed
        }
        return updateTodo
      }
      return todo
    })

    this.setState({
      todos: updatedTodos
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer handleCompleteChange={this.handleCompleteChange} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
